const messages = {
    fr: {
      message: {
          centre: 'Centre',
          asbl: 'ASBL'
      }
    },

    nl: {
      message: {
          centre: 'Centrum',
          asbl: 'VZW'
      }
    },

    en: {
      message: {
          centre: 'Center',
          asbl: 'NPO'
      }
    },
  }

  const i18n = createI18n({
    locale: 'fr',
    messages
  })


export default i18n;