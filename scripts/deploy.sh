
# clean up last version
rm -rf _deployme
mkdir _deployme
# build
sh scripts/build.sh
# minify JS
uglify -s bundle.js -o _deployme/bundle.js
# minify CSS
cssshrink bundle.css > _deployme/bundle.css
# copy HTML and images
cp index.html _deployme/index.html
cp -r images/ _deployme/images/
# done
date; echo;
