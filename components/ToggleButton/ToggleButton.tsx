import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  createContext,
  useContext,
  ReactElement,
  FC,
} from "react";

const ToggleContext = createContext({
  on: false,
  toggle: () => {},
});

function useEffectAfterMount(cb: () => void, dependencies: boolean[]) {
  const justMounted = useRef(true);
  useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, [...dependencies, cb]);
}

interface ToggleProps {
  onToggle: (on: boolean) => void;
  children?: ReactElement[];
}

const ToggleButton = (props: ToggleProps) => {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => setOn((oldOn) => !oldOn), []);

  useEffectAfterMount(() => {
    props.onToggle(on);
  }, [on]);

  const value = useMemo(() => ({ on, toggle }), [on, toggle]);

  return (
    <ToggleContext.Provider value={value}>
      {props.children}
    </ToggleContext.Provider>
  );
};

const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
};

const On: FC<{ children: ReactElement }> = ({ children }) => {
  const { on } = useToggleContext();
  return on ? children : null;
};

const Off: FC<{ children: ReactElement }> = ({ children }) => {
  const { on } = useToggleContext();
  return on ? null : children;
};

const Switch: FC = () => {
  const { on, toggle } = useToggleContext();

  return (
    <div className="relative">
      <input
        type="checkbox"
        className="peer appearance-none cursor-pointer border border-gray-400 rounded-full checked:border-emerald-400 w-32 h-16"
        checked={on}
        onChange={toggle}
      />
      <span className="peer-checked:left-[4.25rem] peer-checked:bg-emerald-400 transition-all duration-200 pointer-events-none w-14 h-14 block absolute top-1 left-1 rounded-full bg-gray-400" />
    </div>
  );
};

ToggleButton.On = On;
ToggleButton.Off = Off;
ToggleButton.Switch = Switch;

/* (ToggleButton as any).On = On;
 * (ToggleButton as any).Off = Off;
 * (ToggleButton as any).Switch = Switch; */

export default ToggleButton;
