export default class TaskListCtrl {
  constructor($scope, TaskService, $rootScope) { 'ngInject';
    this.$scope = $scope
    this.$rootScope = $rootScope
    this.$scope.moment = new moment()
    this.TaskService = TaskService
  }

  getTasks(){
    this.TaskService.get(this.$scope.$parent.project.id).then(
      (response) => { this.$scope.tasks = response.data },
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
      (errors) => { alert(errors.data.name.join(', ')) }
    )
  }
  
  onSuccess(response) {
    this.$scope.tasks.push(response.data)
    this.$scope.showForm = false
    this.$scope.taskName = ''
  }

  toggleTaskStatus(task) {
    this.TaskService.update(this.$scope.$parent.project.id, task).then(
      (response) => { console.log(response) /* update task status */ },
      (errors) => { alert(errors.data.name.join(', ')) } 
    )
  }

  destroy(task) {
    this.TaskService.destroy(this.$scope.$parent.project.id, task.id).then(
      response => { this.removeLocaly(task) },
      errors => { alert(errors.data.name.join(', ')) }
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
    task.name = editedTaskName
    this.TaskService.update(this.$scope.$parent.project.id, task).then(
      success => { this.cancelEdit() },
      errors => { console.log(errors.data.name.join(', ')) }
    )
  }

  cancelEdit() {
    this.$scope.editedTaskName = ''
    this.$scope.editedTask = null 
  }

  setUpDateTime(data, time) {
    let fresh_data = data.format('DD-MM-YYYY') + time.format(' HH:mm')
    let params = { id: this.$rootScope.currentTask.id, deadline: fresh_data }

    this.TaskService.update(this.$scope.$parent.project.id, params).then(
      success => { this.setUpNewDate(fresh_data) },
      errors => { console.log(errors.data.name.join(', ')) }
    )
  }

  setUpNewDate(fresh_data) { 
    this.$rootScope.currentTask.deadline = fresh_data
  }
}