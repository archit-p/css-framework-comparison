## Frameworks Included

1. Bootstrap
2. Bulma
3. Tailwind CSS
4. Materialize
5. Pure CSS
6. UIKit
7. Tachyons
8. Foundation
9. Milligram

## Methodology

Everyday a CI job runs and downloads the latest versions of all css frameworks from npm.

```
# force update versions
npm i -g npm-check-updates
ncu -u

# install all frameworks
npm i
```
See [travis.yml](.travis.yml) for more info.

## Contributing

Your favorite framework missing from the list? Feel free to send in a PR!

## License

See [LICENSE.md](LICENSE.md)
