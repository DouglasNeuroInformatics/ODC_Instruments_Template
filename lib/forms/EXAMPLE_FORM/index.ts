import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { sum } from '/runtime/v1/lodash-es@4.x';
import { z } from '/runtime/v1/zod@3.x';

const $Response = z.number().int().min(0).max(4);

export default defineInstrument({
  kind: 'FORM',
  language: ['en', 'fr'],
  tags: {
    en: ['Example'],
    fr: ['Exemple']
  },
  internal: {
    edition: 1,
    name: 'EXAMPLE_FORM'
  },
  clientDetails: {
    estimatedDuration: 1,
    instructions: {
      en: ['Please answer each question by selecting the option that best describes your experience.'],
      fr: ['Veuillez répondre à chaque question en sélectionnant l’option qui décrit le mieux votre expérience.']
    },
    title: {
      en: 'Example Form',
      fr: 'Formulaire d’exemple'
    }
  },
  details: {
    title: {
      en: 'Example Form',
      fr: 'Formulaire d’exemple'
    },
    description: {
      en: 'A minimal example instrument demonstrating the structure of an Open Data Capture form.',
      fr: 'Un instrument d’exemple minimal illustrant la structure d’un formulaire Open Data Capture.'
    },
    license: 'UNLICENSED'
  },
  content: {
    mood: {
      kind: 'number',
      label: {
        en: 'In the past week, how often have you felt down or low?',
        fr: 'Au cours de la dernière semaine, à quelle fréquence vous êtes-vous senti·e abattu·e ?'
      },
      options: {
        en: {
          0: 'Never',
          1: 'Rarely',
          2: 'Sometimes',
          3: 'Often',
          4: 'Always'
        },
        fr: {
          0: 'Jamais',
          1: 'Rarement',
          2: 'Parfois',
          3: 'Souvent',
          4: 'Toujours'
        }
      },
      variant: 'radio'
    },
    energy: {
      kind: 'number',
      label: {
        en: 'In the past week, how often have you felt low on energy?',
        fr: 'Au cours de la dernière semaine, à quelle fréquence avez-vous manqué d’énergie ?'
      },
      options: {
        en: {
          0: 'Never',
          1: 'Rarely',
          2: 'Sometimes',
          3: 'Often',
          4: 'Always'
        },
        fr: {
          0: 'Jamais',
          1: 'Rarement',
          2: 'Parfois',
          3: 'Souvent',
          4: 'Toujours'
        }
      },
      variant: 'radio'
    }
  },
  measures: {
    mood: {
      kind: 'computed',
      label: {
        en: 'Mood',
        fr: 'Humeur'
      },
      value: ({ mood }) => mood
    },
    energy: {
      kind: 'computed',
      label: {
        en: 'Energy',
        fr: 'Énergie'
      },
      value: ({ energy }) => energy
    },
    totalScore: {
      kind: 'computed',
      label: {
        en: 'Total score',
        fr: 'Score total'
      },
      value: (data) => sum(Object.values(data))
    }
  },
  validationSchema: z.object({
    mood: $Response,
    energy: $Response
  })
});
