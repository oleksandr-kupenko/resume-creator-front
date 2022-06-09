import {
  BLCOK_TYPE,
  CONTACT_TYPE,
  NewResumeInstance,
} from 'src/app/templates/resume.interface';

export const resume: NewResumeInstance = {
  blocks: {
    1: {
      type: BLCOK_TYPE.headinfo,
      data: {
        photo: {
          image: '@default',
        },
        contacts: {
          items: [
            {
              type: CONTACT_TYPE.email,
              value:
                '<p>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!f!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>',
            },
            {
              type: CONTACT_TYPE.phone,
              value: '',
            },
            {
              type: CONTACT_TYPE.phone,
              value: '',
            },
            {
              type: CONTACT_TYPE.phone,
              value: '',
            },
          ],
        },
        fullname: '',
        position: '',
      },
    },
    2: {
      type: BLCOK_TYPE.education,
      data: {
        title: '',
        items: [
          {
            institution: '',
            description: '',
            period: {
              end: null,
              start: null,
            },
          },
        ],
      },
    },
    3: {
      type: BLCOK_TYPE.experience,
      data: {
        title: '',
        items: [
          {
            company: '',
            position: '',
            description: '',
            period: {
              start: null,
              end: null,
            },
          },
        ],
      },
    },
    4: {
      type: BLCOK_TYPE.certificates,
      data: {
        title: '',
        items: [
          {
            description: '',
            date: null,
          },
        ],
      },
    },
    5: {
      type: BLCOK_TYPE.summary,
      data: {
        title: '',
        summary: '',
      },
    },
    6: {
      type: BLCOK_TYPE.profskills,
      data: {
        title: '',
        items: [
          {
            name: '',
            rate: 5,
          },
          {
            name: '',
            rate: 4,
          },
          {
            name: '',
            rate: 3,
          },
        ],
      },
    },
    7: {
      type: BLCOK_TYPE.techskills,
      data: {
        title: '',
        items: [
          {
            name: '',
            rate: 5,
          },
          {
            name: '',
            rate: 4,
          },
          {
            name: '',
            rate: 3,
          },
        ],
      },
    },
    8: {
      type: BLCOK_TYPE.langskills,
      data: {
        title: '',
        items: [
          {
            name: '',
            rate: 5,
          },
          {
            name: '',
            rate: 4,
          },
          {
            name: '',
            rate: 3,
          },
        ],
      },
    },
    9: {
      type: BLCOK_TYPE.about,
      data: {
        title: '',
        about: '',
      },
    },
    next: 9,
  },
  disposition: {
    smart: {
      header: [1],
      main: [2, 3, 4],
      right: [5, 6, 7, 8],
    },
  },
};
