export default class TaskListCtrl {
  constructor($scope, TaskService, $rootScope, Flash, $window) { 'ngInject';
    this.$scope = $scope
    this.$rootScope = $rootScope
    this.$scope.moment = new moment()
    this.TaskService = TaskService
    this.modalIsOn = []
    this.Flash = Flash
    this.$window = $window
    this.mindate = moment().subtract(1, 'day').format('DD/MM/YYYY');
  }

  getTasks(){
    this.TaskService.get(this.$scope.$parent.project.id).then(
      (response) => { this.refreshTasks(response.data) },
      (errors) => { alert(errors) } 
    )
  }

  openPicker(task) {
    this.$rootScope.currentTask = task
    if (task.deadline) { 
      this.$rootScope.actual_data = moment.utc(task.deadline).format('DD/MM/YYYY')
      this.$rootScope.actual_time = moment.utc(task.deadline).format('HH:mm')
    }else{
      this.$rootScope.actual_data = moment.utc().format('DD/MM/YYYY')
      this.$rootScope.actual_time = '12:00'
    }
  }

  create(task_name) {
    this.TaskService.create(this.$scope.$parent.project.id, task_name).then(
      (response) => { this.onSuccess(response) },
      (errors) => { alert(errors.data.join(', ')) }
    )
  }
  
  onSuccess(response) {
    this.$scope.tasks.push(response.data)
    this.$scope.showForm = false
    this.$scope.taskName = ''
  }

  toggleTaskStatus(task) {
    this.TaskService.update(this.$scope.$parent.project.id, task).then(
      (response) => { this.refreshTasks(response.data) },
      (errors) => { task.done = !task.done; this.Flash.create('danger', errors.data.join(', ')) }
    )
  }

  destroy(task) {
    this.TaskService.destroy(this.$scope.$parent.project.id, task.id).then(
      response => { this.removeLocaly(task) },
      errors => { this.Flash.create('danger', errors.data.join(', ')) }
    )
  }

  removeLocaly(task) {
    this.$scope.tasks.splice(this.$scope.tasks.indexOf(task), 1)
  }

  startEditing(task) {
    this.$scope.editedTaskName = task.name
    this.$scope.editedTask = task
  }

  edit(task, editedTaskName) {
    let params = { id: task.id, name: editedTaskName }
    this.TaskService.update(this.$scope.$parent.project.id, params).then(
      success => { this.cancelEdit(success.data) },
      errors => { this.Flash.create('danger', errors.data.join(', ')) }
    )
  }

  cancelEdit(data) {
    this.$scope.editedTaskName = ''
    this.$scope.editedTask = null
    if(data) { this.refreshTasks(data) }
  }

  setUpDateTime(data, time) {
    let fresh_data = data.format('DD-MM-YYYY') + time.format(' HH:mm')
    let params = { id: this.$rootScope.currentTask.id, deadline: fresh_data }

    this.TaskService.update(this.$scope.$parent.project.id, params).then(
      success => { this.refreshTasks(success.data) },
      errors => { this.Flash.create('danger', errors.data.join(', ')) }
    )
  }

  isOverdue(deadline) {
    return moment(deadline) < moment(new Date()).add(1,'days')._d
  }

  move(task, direction) {
    let params = { id: task.id, move: direction }
    this.TaskService.update(this.$scope.$parent.project.id, params).then(
      success => { this.refreshTasks(success.data) },
      errors => { console.log(errors.data.join(', ')) }
    )
  }

  refreshTasks(data) {
    if((data.length > 0) && !(data.map(task => task.done).includes(false))) {
      this.Flash.create('success', 'Well Done! You’re successfully completed all the task.')
    }
    this.$scope.tasks = data
  }

  confirmDestroy(task) {
    if (this.$window.confirm(`Are you sure you want to delete "${task.name}"?`)) {
      this.destroy(task)
    }
  }
}
