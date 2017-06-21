export default function (ThemesProvider) {
  'ngInject'

  ThemesProvider.setThemes([
    {
      id: '',
      name: 'None'
    },
    {
      id: 'oui-theme-sapphire',
      name: 'Sapphire'
    },
    {
      id: 'oui-theme-diamond',
      name: 'Diamond'
    }
  ])
}
