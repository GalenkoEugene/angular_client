export default class ProjectsService {
  constructor($http) {
    this.$http = $http
  }

  getProjects() {
    return this.$http.get('https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json')
  }
}
