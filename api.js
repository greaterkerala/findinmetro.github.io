"use strict";
var api;
(function (api) {
    var Properties = /** @class */ (function () {
        function Properties() {
        }
        return Properties;
    }());
    api.Properties = Properties;
    var Leaf = /** @class */ (function () {
        function Leaf(s) {
            this.list = [];
            this.s = s;
            this.properties = {
                visibility: "",
                width: 12,
                colxsselected: false,
                colsmselected: false,
                colmdselected: true,
                collgselected: false,
                colxswidth: 12,
                colsmwidth: 12,
                colmdwidth: 12,
                collgwidth: 12,
                colxsoffsetselected: false,
                colsmoffsetselected: false,
                colmdoffsetselected: false,
                collgoffsetselected: false,
                colxsoffsetwidth: 1,
                colsmoffsetwidth: 1,
                colmdoffsetwidth: 1,
                collgoffsetwidth: 1,
                height: 10
            };
        }
        Leaf.prototype.setDimensions = function (index) {
            var dims = [
                { width: 320, height: 480 },
                { width: 480, height: 320 },
                { width: 768, height: 1024 },
                { width: 1024, height: 768 },
                { width: 375, height: 667 },
                { width: 667, height: 375 },
                { width: 414, height: 736 },
                { width: 736, height: 414 },
                { width: 320, height: 640 },
                { width: 640, height: 320 },
                { width: 1024, height: 768 },
            ];
            this.properties.width = dims[index].width;
            this.properties.height = dims[index].height;
        };
        ;
        Leaf.prototype.getClassExpression = function () {
            var classexpression = "";
            if (this.properties.colxsselected) {
                classexpression += " col-xs-" + this.properties.colxswidth;
            }
            if (this.properties.colsmselected) {
                classexpression += " col-sm-" + this.properties.colsmwidth;
            }
            if (this.properties.colmdselected) {
                classexpression += " col-md-" + this.properties.colmdwidth;
            }
            if (this.properties.collgselected) {
                classexpression += " col-lg-" + this.properties.collgwidth;
            }
            if (this.properties.colxsoffsetselected) {
                classexpression += " col-xs-offset-" + this.properties.colxsoffsetwidth;
            }
            if (this.properties.colsmoffsetselected) {
                classexpression += " col-sm-offset-" + this.properties.colsmoffsetwidth;
            }
            if (this.properties.colmdoffsetselected) {
                classexpression += " col-md-offset-" + this.properties.colmdoffsetwidth;
            }
            if (this.properties.collgoffsetselected) {
                classexpression += " col-lg-offset-" + this.properties.collgoffsetwidth;
            }
            if (classexpression === '') {
                classexpression = " col-md-" + this.properties.colmdwidth;
            }
            return classexpression;
        };
        Leaf.prototype.operation = function () {
            console.log("`operation of `", this.s);
            var cg = new CodeGenerator(this);
            var ret = cg.getCodePreFixCode();
            for (var i = 0; i < this.list.length; i += 1) {
                ret += this.list[i].operation();
            }
            ret += cg.getCodePostFixCode();
            return ret;
        };
        Leaf.prototype.hasChildren = function () {
            if (this.list.length > 0) {
                return true;
            }
            else {
                return false;
            }
        };
        Leaf.prototype.add = function (c) {
            var leafnodes = [
                "Dropdown List",
                "Button Group",
                "Button Drop Downs",
                "Input Groups",
                "Navs",
                "Nav Bars",
                "Bread Crumbs",
                "Pagination",
                "Labels",
                "Badges",
                "Jumbotron",
                "Page Header",
                "Thumnails",
                "Progress Bar",
                "List Group"
            ];
            if (leafnodes.indexOf(this.s) === -1) {
                c.p = this;
                this.list.push(c);
                return true;
            }
            else {
                return false;
            }
        };
        Leaf.prototype.deleteFromParent = function () {
            var indexOfItem = this.p.list.indexOf(this);
            this.p.remove(indexOfItem);
        };
        Leaf.prototype.remove = function (i) {
            if (this.list.length <= i) {
                throw new Error("index out of bound!");
            }
            this.list.splice(i, 1);
        };
        Leaf.prototype.moveUp = function () {
            var index = this.p.list.indexOf(this);
            if (index < this.p.list.length - 1) {
                this.move(this.p.list, index, index + 1);
            }
            var index1 = this.p.list.indexOf(this);
        };
        Leaf.prototype.moveDown = function () {
            var index = this.p.list.indexOf(this);
            if (index > 0) {
                this.move(this.p.list, index, index - 1);
            }
            var index1 = this.p.list.indexOf(this);
        };
        Leaf.prototype.move = function (nodes, from, to) {
            nodes.splice(to, 0, nodes.splice(from, 1)[0]);
            return nodes;
        };
        ;
        Leaf.prototype.generateCode = function () {
            var code = this.operation();
            return code;
        };
        return Leaf;
    }());
    api.Leaf = Leaf;
    var CodeGenerator = /** @class */ (function () {
        function CodeGenerator(c) {
            this.c = c;
        }
        CodeGenerator.prototype.getSnippet = function (type, classExpression) {
            var snippets = {
                "Div": { prefix: "<Div class=\"" + classExpression + "\">",
                    postfix: "</Div>" },
                "Dropdown List": {
                    prefix: " <!--Dropdown List --><div class=\"dropdown\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                  Dropdown\n                  <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div> <!-- End Dropdown List -->", postfix: ""
                },
                "Button Group": {
                    prefix: "\n                <!-- Button Group-->\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                <button type=\"button\" class=\"btn btn-default\">Left</button>\n                <button type=\"button\" class=\"btn btn-default\">Middle</button>\n                <button type=\"button\" class=\"btn btn-default\">Right</button>\n                </div>            \n                <!-- End Button Group-->\n                ", postfix: ""
                },
                "Button Drop Downs": {
                    prefix: "\n                <div class=\"btn-group dropup\">\n                <button type=\"button\" class=\"btn btn-default\">Dropup</button>\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"caret\"></span>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                <!-- Dropdown menu links -->\n                </ul>\n                </div>            \n                ", postfix: " "
                },
                "Input Groups": {
                    prefix: "\n                <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\" id=\"sizing-addon1\">@</span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon1\">\n                </div>            \n                ", postfix: ""
                },
                "Navs": {
                    prefix: "\n                <ul class=\"nav nav-tabs\">\n                <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n                <li role=\"presentation\"><a href=\"#\">Profile</a></li>\n                <li role=\"presentation\"><a href=\"#\">Messages</a></li>\n                </ul>            \n                ", postfix: ""
                },
                "Nav Bars": {
                    prefix: "\n                <nav class=\"navbar navbar-default\">\n                <div class=\"container-fluid\">\n                    <!-- Brand and toggle get grouped for better mobile display -->\n                    <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">Brand</a>\n                    </div>\n    \n                    <!-- Collect the nav links, forms, and other content for toggling -->\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n                        <li><a href=\"#\">Link</a></li>\n                        <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">One more separated link</a></li>\n                        </ul>\n                        </li>\n                    </ul>\n                    <form class=\"navbar-form navbar-left\">\n                        <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                    </form>\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a href=\"#\">Link</a></li>\n                        <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                        </li>\n                    </ul>\n                    </div><!-- /.navbar-collapse -->\n                </div><!-- /.container-fluid -->\n                </nav>            \n                ",
                    postfix: ""
                },
                "Bread Crumbs": {
                    prefix: "\n                <ol class=\"breadcrumb\">\n                    <li><a href=\"#\">Home</a></li>\n                    <li><a href=\"#\">Library</a></li>\n                    <li class=\"active\">Data</li>\n                </ol>            \n                ", postfix: ""
                },
                "Pagination": {
                    prefix: "\n                <nav aria-label=\"Page navigation\">\n                <ul class=\"pagination\">\n                  <li>\n                    <a href=\"#\" aria-label=\"Previous\">\n                      <span aria-hidden=\"true\">&laquo;</span>\n                    </a>\n                  </li>\n                  <li><a href=\"#\">1</a></li>\n                  <li><a href=\"#\">2</a></li>\n                  <li><a href=\"#\">3</a></li>\n                  <li><a href=\"#\">4</a></li>\n                  <li><a href=\"#\">5</a></li>\n                  <li>\n                    <a href=\"#\" aria-label=\"Next\">\n                      <span aria-hidden=\"true\">&raquo;</span>\n                    </a>\n                  </li>\n                </ul>\n                </nav>            \n                ",
                    postfix: ""
                },
                "Labels": {
                    prefix: "\n                    <span class=\"label label-default\">Default</span>\n                    <span class=\"label label-primary\">Primary</span>\n                    <span class=\"label label-success\">Success</span>\n                    <span class=\"label label-info\">Info</span>\n                    <span class=\"label label-warning\">Warning</span>\n                    <span class=\"label label-danger\">Danger</span>            \n                ",
                    postfix: ""
                },
                "Badges": {
                    prefix: "\n                    <a href=\"#\">Inbox <span class=\"badge\">42</span></a>\n                    \n                    <button class=\"btn btn-primary\" type=\"button\">\n                    Messages <span class=\"badge\">4</span>\n                    </button>            \n                ", postfix: ""
                },
                "Jumbotron": {
                    prefix: "\n                    <div class=\"jumbotron\">\n                    <h1>Hello, world!</h1>\n                    <p>...</p>\n                    <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a></p>\n                    </div>            \n                ", postfix: ""
                },
                "Page Header": {
                    prefix: "\n                <div class=\"page-header\">\n                <h1>Example page header <small>Subtext for header</small></h1>\n                </div>            \n                ", postfix: ""
                },
                "Thumnails": {
                    prefix: "\n                    <a href=\"#\" class=\"thumbnail\">\n                    <img src=\"...\" alt=\"...\">\n                    </a>\n                      \n                ", postfix: " "
                },
                "Progress Bar": {
                    prefix: "\n                    <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                    <span class=\"sr-only\">60% Complete</span>\n                    </div>\n                    </div>            \n                ",
                    postfix: ""
                },
                "List Group": {
                    prefix: "\n                    <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Cras justo odio</li>\n                    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                    <li class=\"list-group-item\">Morbi leo risus</li>\n                    <li class=\"list-group-item\">Porta ac consectetur ac</li>\n                    <li class=\"list-group-item\">Vestibulum at eros</li>\n                    </ul>            \n                ", postfix: ""
                },
                "Panels": {
                    prefix: "\n                        <div class=\"panel panel-default\">\n                        <div class=\"panel-body\">\n                            Basic panel example\n                        </div>\n                        </div>                \n                    ", postfix: " "
                },
                "Responsive Embed": {
                    prefix: "\n                        <!-- 16:9 aspect ratio -->\n                        <div class=\"embed-responsive embed-responsive-16by9\">\n                        <iframe class=\"embed-responsive-item\" src=\"...\"></iframe>\n                        </div>                \n                    ", postfix: ""
                }
            };
            return snippets[type];
        };
        CodeGenerator.prototype.getCodePreFixCode = function () {
            var classExpression = this.c.getClassExpression();
            var snippet = this.getSnippet(this.c.s, classExpression);
            console.log(snippet);
            return (snippet) ? snippet.prefix : "<" + this.c.s + ">";
        };
        CodeGenerator.prototype.getCodePostFixCode = function () {
            var classExpression = this.c.getClassExpression();
            var snippet = this.getSnippet(this.c.s, classExpression);
            return (snippet) ? snippet.postfix : "<" + this.c.s + ">";
        };
        return CodeGenerator;
    }());
})(api || (api = {}));
var l1 = new api.Leaf("Div");
var l2 = new api.Leaf("Div");
var l3 = new api.Leaf("Div");
var l4 = new api.Leaf("Div");
l1.add(l2);
l1.add(l3);
l1.add(l4);
l4.moveUp();
l4.moveUp();
l4.moveUp();
l4.moveDown();
l4.moveDown();
l4.moveDown();
l4.moveDown();
l4.moveDown();
var code = l1.generateCode();
console.log(code);
//l1.operation();
