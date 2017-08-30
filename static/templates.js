angular.module('templates.app', ['about.tpl.html', 'cite-page.tpl.html', 'landing.tpl.html', 'page-not-found.tpl.html']);

angular.module("about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about.tpl.html",
    "<div class=\"page about\" layout=\"row\" layout-align=\"center center\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>About</h2>\n" +
    "        <div class=\"text\">\n" +
    "            <p>\n" +
    "                CiteAs is a way to\n" +
    "                help get the correct citation for diverse research products,\n" +
    "                from software and datasets to preprints and articles.\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                It's part of a larger grant, funded by the Alfred P. Sloan Foundation,\n" +
    "                to help scholars who share reusable\n" +
    "                research software get credit for their work.\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                CiteAs is a collaboration between\n" +
    "                <a href=\"http://james.howison.name/\">James Howison</a> at the\n" +
    "                University of Texas-Austin, and\n" +
    "                <a href=\"http://impactstory.org/about\">Impactstory.</a>\n" +
    "            </p>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("cite-page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cite-page.tpl.html",
    "<div class=\"page cite-page\" layout=\"row\" layout-align=\"center center\">\n" +
    "\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"main\">\n" +
    "            <div class=\"loading\"\n" +
    "                 ng-show=\"apiResp=='loading'\">\n" +
    "                <span class=\"label\">Building your citation&hellip;</span>\n" +
    "                <md-progress-linear md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"error\" ng-show=\"apiResp=='error'\">\n" +
    "                <h2>Sorry!</h2>\n" +
    "                <div class=\"text\">\n" +
    "                    We weren't able to figure out a citation for this research product.\n" +
    "                    We're in active development and hopefully this particular case will\n" +
    "                    be working soon. Feel free to\n" +
    "                    <a href=\"mailto:team@impactstory.org\">let us know</a> and we'll\n" +
    "                    look into it.\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"citation animated fadeIn\" ng-show=\"apiResp.citation\">\n" +
    "\n" +
    "                Style:\n" +
    "                <select ng-model=\"selectedCitation\"\n" +
    "                               ng-options=\"y.style_fullname for (x, y) in apiResp.citation\">\n" +
    "                </select>\n" +
    "\n" +
    "\n" +
    "                <div class=\"text\" ng-bind-html=\"selectedCitation.citation\">\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"controls\" layout=\"row\" layout-align=\"left center\">\n" +
    "                    <md-button ng-click=\"export()\">\n" +
    "                        <i class=\"fa fa-download\"></i>\n" +
    "                        Export\n" +
    "                    </md-button>\n" +
    "                    <md-button ng-href=\"mailto:team@impactstory.org\">\n" +
    "                        <i class=\"fa fa-bullhorn\"></i>\n" +
    "                        Report bug\n" +
    "                    </md-button>\n" +
    "                    <md-button ng-href=\"{{ apiUrl }}\">\n" +
    "                        <i class=\"fa fa-cogs\"></i>\n" +
    "                        Show in API\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

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
    "                                   ng-click=\"submit()\"\n" +
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
