
// Themes are defined by RGB
const basic = {
  "--primary-col": "51,53,51",
  "--accent-col": "245, 203, 92",
  "--content-col": "232, 237, 223",
  "--primary-font": "207,219,213",
  "--secondary-font": "207, 219, 213", 
  "--container-col": "36,36,35"
};

const purple_light = {
  "--primary-col": "234,235,230",
  "--accent-col": "121, 50, 88",
  "--content-col": "132, 169, 140",
  "--primary-font": "54,48,43",
  "--secondary-font": "5,5,5", 
  "--container-col": "234,235,230"
};

// Intermediate steps allow us to define multiple values above,
// and swap them in an out to toggle comparisons
// Intermediate Step for the Light Theme
const light_inter = purple_light;

// Intermediate Step for the Dark Theme
const dark_inter = basic;

// Function with standard config
function create_theme(cfg) {
  return({
    // Sidebar
    "--sidebar-bg": "rgb(".concat(cfg["--primary-col"],")"),
    "--sidebar-text": "rgb(".concat(cfg["--secondary-font"],")"),
    "--sidebar-strong": "rgb(".concat(cfg["--secondary-font"],")"),
    "--sidebar-footer": "rgb(".concat(cfg["--secondary-font"],")"),
    
    // Main Page 
    "--main-head-text": "rgb(".concat(cfg["--secondary-font"],")"),
    "--main-text": "rgb(".concat(cfg["--primary-font"],")"),
    "--main-bg": "rgb(".concat(cfg["--container-col"],")"),
    
    // Accents
    "--accent-color": "rgb(".concat(cfg["--accent-col"],")"),
    
    // Gradients (no RGB here, that's handled in the CSS)
    "--gradient": cfg["--container-col"]
  })
  
};

// set return variables
const light_theme = create_theme(light_inter);
const dark_theme =  create_theme(dark_inter);

export {light_theme, dark_theme};

  // const blue_orange = {
  //   "--primary-col": "45, 49, 66",
  //   "--accent-col": "239, 131, 84",
  //   "--content-col": "79, 93, 117",
  //   "--primary-font": "207, 219, 213",
  //   "--secondary-font": "207, 219, 213", 
  //   "--container-col": "79, 93, 117"
  //  };