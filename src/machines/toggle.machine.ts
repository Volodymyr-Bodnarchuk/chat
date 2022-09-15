import { createMachine } from 'xstate';

const toggleMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./toggle.machine.typegen').Typegen0,
    id: 'a',
    schema: {
      context: {} as { value: string },
      events: {} as { type: 'FOO'; value: string } | { type: 'BAR' },
    },
    initial: 'a',
    states: {
      a: {
        on: {
          FOO: {
            actions: 'consoleLogValue',
            target: 'b',
          },
        },
      },
      b: {
        entry: 'consoleLogValueAgain',
      },
    },
  },
  {
    actions: {
      consoleLogValueAgain: (ctx) => console.log(ctx.value),
      consoleLogValue: (ctx, event) => console.log(ctx.value),
    },
  }
);
export { toggleMachine };
