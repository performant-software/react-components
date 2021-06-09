const layouts = {
  transliterationAlaLc: {
    layout: {
      default: [
        '1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        '{tab} b t j ḥ d r z s ṣ ḍ ṭ ẓ ʿ f q k l m n h',
        '{lock} th ḫ dh sh gh ʾ ā/á b. Ibn al- at āt {enter}',
        '{shift} ā ū ī á īy ūw a u i aw ay {shift}',
        '{space}',
      ],
    }
  },
  transliterationBetacode: {
    layout: {
      default: [
        '1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        '{tab} b t j/^g *h d r z s *s *d *t *z ` f *k k l m n h',
        '{lock} _t _h _d ^s *g a/ b. Ibn All_ah All~ah lill_ah lill~ah a u i ū ī a=t _a=t ?a*n ?i*n ?u {enter}',
        '{shift} _a/*a _u/*w _i /a iyy uww a u i !o aw {shift}',
        '{space}',
      ]
    }
  }
};

export default layouts;
