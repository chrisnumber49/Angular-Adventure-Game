export interface Question {
  id: string;
  data: string,
  selected: boolean;
  parent: string;
  childrenRef?: {
    id: string, 
    value: boolean
  }[],
  background?: 'red' | 'silver';
  linkColor?: 'black';
}

export const questionList: Question[] = [
  {
    id: '0',
    data: "Do you want a doughnut?",
    parent: null,
    childrenRef: [
      {id:'1', value: true},
      {id:'2', value: false},
    ],
    selected: true,
  },
  {
    id: '1',
    data: "Do I deserve it?",
    parent: '0',
    childrenRef: [
      {id:'3', value: true},
      {id:'4', value: false},
    ],
    selected: false
  },
  {
    id: '2',
    data: "Maybe you want an apple",
    parent: '0',
    selected: false
  },
  {
    id: '3',
    data: "Are you sure?",
    parent: '1',
    childrenRef: [
      {id:'5', value: true},
      {id:'6', value: false},
    ],
    selected: false,
  },
  {
    id: '4',
    data: "Is it a good doughnut?",
    parent: '1',
    childrenRef: [
      {id:'7', value: true},
      {id:'8', value: false},
    ],
    selected: false
  },
  {
    id: '5',
    data: "Get it!",
    parent: '3',
    selected: false
  },
  {
    id: '6',
    data: "Do jumping jacks first",
    parent: '3',
    selected: false
  },
  {
    id: '7',
    data: "What are you waitnig for? \n Grab it now!",
    parent: '4',
    selected: false
  },
  {
    id: '8',
    data: "Wait 'til you find a sinful, \n unforgettable doughnut.",
    parent: '4',
    selected: false
  },
]

