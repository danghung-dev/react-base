/**
 * Setup configuration variables based on the "app" the data-portal is
 * being deployed into (Brain Health Commons, Blood Pack, ...)
 *
 * @param {app, dev, basename, mockStore, hostname} opts overrides for defaults
 */
function buildConfig(opts) {
  const defaults = {
    dev: !!(process.env.NODE_ENV && process.env.NODE_ENV === "dev"),
    mockStore: !!(process.env.MOCK_STORE && process.env.MOCK_STORE === "true"),
    app: process.env.APP || "generic",
    basename: process.env.BASENAME || "/",
    hostname:
      typeof window !== "undefined"
        ? `${window.location.protocol}//${window.location.hostname}/`
        : "http://localhost/"
  }
  const { dev, mockStore, app, basename, hostname } = Object.assign(
    {},
    defaults,
    opts
  )
  // let appname = "Unasigned"
  // let navItems = []
  // let dashboardIcons = [
  //   "account_circle",
  //   "receipt",
  //   "invert_colors",
  //   "description"
  // ]
  // let localTheme = {
  //   "barGraph.lineColor": "#666666",
  //   "barGraph.bar1Color": "#8884d8",
  //   "barGraph.bar2Color": "#82ca9d",
  //   "summary.borderTopColor": "#c87152",
  //   "summary.borderColor": "#222222",
  //   "summary.countColor": "#ff4200",
  //   "summary.iconColor": "#008000",
  //   "projectTable.summaryRowColor": "#eeeeee",
  //   "projectTable.submitButtonColor": "#dddddd",
  //   tableBarColor: "#7d7474"
  // }

  const conf = {
    dev,
    mockStore,
    app,
    basename,
    hostname
  }
  return conf
}

const defaultConf = buildConfig()
module.exports = defaultConf
