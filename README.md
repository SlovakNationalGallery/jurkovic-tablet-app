Vue.js + Electron.js app based on [Deluze/electron-vue-template](https://github.com/Deluze/electron-vue-template) for the Slovak National Gallery in Zvolen.

Including the object panorama viewer built on the top of [Object2VR Player](https://ggnome.com/object2vr/)

![screenshot kostka](https://github.com/SlovakNationalGallery/jurkovic-tablet-app/blob/media/kostka.png?raw=true)
![screenshot kostka detail](https://github.com/SlovakNationalGallery/jurkovic-tablet-app/blob/media/kostka_detail.png?raw=true)

And custom viewer for publications with scroll snapping and zooming:

![screenshot jurkovic](https://github.com/SlovakNationalGallery/jurkovic-tablet-app/blob/media/jurkovic.png?raw=true)
![screenshot jurkovic detail](https://github.com/SlovakNationalGallery/jurkovic-tablet-app/blob/media/jurkovic_detail.png?raw=true)

## Project setup
```
npm install
```

### Development
```
npm run dev
```

## Additional Commands

```bash
npm run dev # starts application with hot reload
npm run build # builds application, distributable files can be found in "dist" folder

# OR

npm run build:mac -- -c.mac.identity=null # skip code-signing for faster build

# OR

npm run build -- --win --x64
```

## Maintainer

This project is maintained by [lab.SNG](http://lab.sng.sk). If you have any questions please don't hesitate to ask them by creating an issue or email us at [lab@sng.sk](mailto:lab@sng.sk).

## License

Source code in this repository is licensed under the MIT license. Please see the [License File](LICENSE) for more information.
