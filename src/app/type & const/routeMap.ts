export interface Question {
  questionId: string;
  data: string,
  selected: boolean;
  parent: string;
  childrenRef?: {
    questionId: string, 
    value: boolean
  }[],
  background?: 'red' | 'silver';
  linkColor?: 'black';
}

export const questionList: Question[] = [
  {
    questionId: '0',
    data: "Do you want a doughnut?",
    parent: null,
    childrenRef: [
      {questionId:'1', value: true},
      {questionId:'2', value: false},
    ],
    selected: true,
  },
  {
    questionId: '1',
    data: "Do I deserve it?",
    parent: '0',
    childrenRef: [
      {questionId:'3', value: true},
      {questionId:'4', value: false},
    ],
    selected: false
  },
  {
    questionId: '2',
    data: "Maybe you want an apple",
    parent: '0',
    selected: false
  },
  {
    questionId: '3',
    data: "Are you sure?",
    parent: '1',
    childrenRef: [
      {questionId:'5', value: true},
      {questionId:'6', value: false},
    ],
    selected: false,
  },
  {
    questionId: '4',
    data: "Is it a good doughnut?",
    parent: '1',
    childrenRef: [
      {questionId:'7', value: true},
      {questionId:'8', value: false},
    ],
    selected: false
  },
  {
    questionId: '5',
    data: "Get it!",
    parent: '3',
    selected: false
  },
  {
    questionId: '6',
    data: "Do jumping jacks first",
    parent: '3',
    selected: false
  },
  {
    questionId: '7',
    data: "What are you waitnig for? \n Grab it now!",
    parent: '4',
    selected: false
  },
  {
    questionId: '8',
    data: "Wait 'til you find a sinful, \n unforgettable doughnut.",
    parent: '4',
    selected: false
  },
]

// constant for unit test
export const TEST_ROUTE_MAP = {
  "data": "Do you want a doughnut?\nfalse",
  "linkColor": "red",
  "background": "red",
  "color": "white",
  "width": 250,
  "height": 75,
  "children": [
      {
          "data": "Do I deserve it?",
          "linkColor": "silver",
          "background": "silver",
          "color": "white",
          "width": 250,
          "height": 75,
          "children": [
              {
                  "data": "Are you sure?",
                  "linkColor": "silver",
                  "background": "silver",
                  "color": "white",
                  "width": 250,
                  "height": 75,
                  "children": [
                      {
                          "data": "Get it!",
                          "linkColor": "silver",
                          "background": "silver",
                          "color": "white",
                          "width": 250,
                          "height": 75,
                      },
                      {
                          "data": "Do jumping jacks first",
                          "linkColor": "silver",
                          "background": "silver",
                          "color": "white",
                          "width": 250,
                          "height": 75,
                      }
                  ],
              },
              {
                  "data": "Is it a good doughnut?",
                  "linkColor": "silver",
                  "background": "silver",
                  "color": "white",
                  "width": 250,
                  "height": 75,
                  "children": [
                      {
                          "data": "What are you waitnig for? \n Grab it now!",
                          "linkColor": "silver",
                          "background": "silver",
                          "color": "white",
                          "width": 250,
                          "height": 75,
                      },
                      {
                          "data": "Wait 'til you find a sinful, \n unforgettable doughnut.",
                          "linkColor": "silver",
                          "background": "silver",
                          "color": "white",
                          "width": 250,
                          "height": 75,
                      }
                  ],
              }
          ],
      },
      {
          "data": "Maybe you want an apple",
          "linkColor": "red",
          "background": "red",
          "color": "white",
          "width": 250,
          "height": 75,
      }
  ],
}