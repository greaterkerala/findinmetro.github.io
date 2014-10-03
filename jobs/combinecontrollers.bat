cd ..
del "javascript\script.js"
touch "javascript\script.js"


type "bower_components\jquery\final\jquery.min.js"  >>"javascript\script.js"
type "bower_components\angular\angular.min.js" >>"javascript\script.js"
type "bower_components\angular-route\angular-route.min.js" >>"javascript\script.js"
type "bower_components\angular-animate\angular-animate.min.js" >>"javascript\script.js"
type "bower_components\bootstrap\lib\js\bootstrap.min.js" >>"javascript\script.js"

type "app.js"  >>"javascript\script.js"

type "layouts\layoutcontroller.js" >>"javascript\script.js"


type "modules\dynamicyoutube\controller.js" >>"javascript\script.js"
type "modules\flickr\controller.js" >>"javascript\script.js"
type "modules\html\controller.js" >>"javascript\script.js"
type "modules\listing\controller.js" >>"javascript\script.js"
type "modules\localnews\controller.js" >>"javascript\script.js"
type "modules\lyrics\controller.js" >>"javascript\script.js"
type "modules\rss\controller.js" >>"javascript\script.js"
type "modules\staticyoutube\controller.js" >>"javascript\script.js"
type "modules\weather\controller.js" >>"javascript\script.js"

type "components\version\version.js" >>"javascript\script.js"
type "components\version\directives.js" >>"javascript\script.js"
type "components\version\filters.js" >>"javascript\script.js"
type "components\version\services.js" >>"javascript\script.js"

type "components\js\moment.min.js" >>"javascript\script.js"
type "components\js\xml2json.js" >>"javascript\script.js"

cd jobs








