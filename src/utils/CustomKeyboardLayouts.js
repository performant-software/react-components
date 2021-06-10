const layouts = {
  transliterationIjmes: {
    layout: {
      default: [
        '` 1 2 3 4 5 6 7 8 9 0 ʾ — {bksp}',
        '{tab} q w e r t y u i o p [ ] \\',
        "{lock} a s d f g h j k l ; ' {enter}",
        '{shift} z x c v b n m , . / {shift}',
        '.com @ {space}'
      ],
      shift: [
        '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
        '{tab} Q W E R T Y U I O P { } |',
        '{lock} A S D F G H J K L : " {enter}',
        '{shift} Z X C V B N M < > ? {shift}',
        '.com @ {space}'
      ]
    },
    enableLayoutCandidates: true,
    layoutCandidates: {
      a: 'ā au aw ai ay',
      d: 'dh',
      h: 'ḥ',
      i: 'ī iyy',
      k: 'kh',
      s: 'ṣ sh',
      t: 'th',
      u: 'ū uww',
      A: 'Ā Au Aw Ai Ay',
      D: 'Dh',
      H: 'Ḥ',
      I: 'Ī Iyy',
      K: 'Kh',
      S: 'Ṣ Sh',
      T: 'Th',
      U: 'Ū Uww'
    }
  },
};

export default layouts;
