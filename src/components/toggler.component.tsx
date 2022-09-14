import { useMachine } from '@xstate/react';
import { toggleMachine } from '../machines/toggle.machine';

export const Toggler = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button
      className='bg-black  text-white'
      onClick={() => send({ type: 'FOO', value: 'hello' })}
    >
      {state.value === 'inactive'
        ? 'Click to activate'
        : 'Active! Click to deactivate'}
    </button>
  );
};
