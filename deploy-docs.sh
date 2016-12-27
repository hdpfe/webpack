cd docs
rm -rf _book
gitbook build
cd _book
git init
git add -A
git commit -m 'update book'
git push -f https://github.com/hdpfe/webpack.git master:gh-pages
