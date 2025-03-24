let mainController = {
  home: (req, res) => {
    res.render('index', { title: 'AG Beaters - Home' });
  },
  aboutMe: (req, res) => {
    res.render('aboutMe', { title: 'AG Beater - About Me' });
  },
  contact: (req, res) => {
    res.render('contact', { title: 'AG Beater - Contact' });
  },
  services: (req, res) => {
    res.render('services', { title: 'AG Beater - Services' });
  },
};

module.exports = mainController;
