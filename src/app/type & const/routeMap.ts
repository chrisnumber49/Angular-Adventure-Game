export interface RouteMap {
    text: string,
    options: Option[]
}

interface Option {
    value: boolean,
    selected: boolean,
    nextStep: NextStep
}

interface NextStep {
    text: string,
    options?: Option[]
}

export const routeMap: RouteMap = {
  text: "Do you want a doughnut?",
  options: [
    {
      value: true,
      selected: false,
      nextStep: {
        text: "Do I deserve it?",
        options: [
          {
            value: true,
            selected: false,
            nextStep: {
              text: "Are you sure?",
              options: [
                {
                  value: true,
                  selected: false,
                  nextStep: {text:"Get it!"}
                },
                {
                  value: false,
                  selected: false,
                  nextStep: {text:"Do jumping jacks first"}
                }
              ]
            }
          },
          {
            value: false,
            selected: false,
            nextStep: {
              text: "Is it a good doughnut?",
              options: [
                {
                  value: true,
                  selected: false,
                  nextStep: {text:"What are you waitnig for? Grab it now!"}
                },
                {
                  value: false,
                  selected: false,
                  nextStep: {text:"Wait 'til you find a sinful, unforgettable doughnut."}
                }
              ]
            }
          }
        ]
      }
    },
    {
      value: false,
      selected: false,
      nextStep: {
        text: "Maybe you want an apple"
      }
    }
  ]
}

