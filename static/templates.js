angular.module('templates.app', ['landing.tpl.html', 'page-not-found.tpl.html']);

angular.module("landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing.tpl.html",
    "<div class=\"page landing\">\n" +
    "    <div class=\"top-screen\" layout=\"row\" layout-align=\"center center\">\n" +
    "        <div class=\"content\">\n" +
    "            <div class=\"tagline\">\n" +
    "                <h1>All research products deserve credit.</h1>\n" +
    "                <p class=\"subtagline\">\n" +
    "                    Get the correct citation for diverse research products,\n" +
    "                    from software and datasets to preprints and articles.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"user-input\">\n" +
    "                <div class=\"input-row\">\n" +
    "                    <md-input-container md-no-float\n" +
    "                                        class=\"md-block example-selected-{{ main.exampleSelected }}\"\n" +
    "                                        flex-gt-sm=\"\">\n" +
    "                        <label>Paste a URL or DOI</label>\n" +
    "                        <input ng-model=\"main.id\">\n" +
    "\n" +
    "                        <md-button ng-show=\"main.id\"\n" +
    "                                   ng-class=\"{fadeOut: !main.id}\"\n" +
    "                                   class=\"md-fab md-mini md-primary go animated fadeInRightBig\">\n" +
    "                            <i class=\"fa fa-arrow-right\"></i>\n" +
    "                        </md-button>\n" +
    "\n" +
    "                        <!--\n" +
    "                        <md-button class=\"md-raised md-primary submit\" type=\"submit\">\n" +
    "                            Get the citation\n" +
    "                        </md-button>\n" +
    "                        -->\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("page-not-found.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page-not-found.tpl.html",
    "<div class=\"landing static-page\">\n" +
    "    <h1>Sorry, we couldn't find that page!</h1>\n" +
    "\n" +
    "</div>");
}]);
