
  // Function to show the Create Task modal
  function showCreateTaskModal() {
    document.getElementById('create-task-modal').classList.remove('hidden');
  }

  // Function to hide the Create Task modal
  function hideCreateTaskModal() {
    document.getElementById('create-task-modal').classList.add('hidden');
  }

  // Function to create a task (this can be customized to your needs)
  function createTask() {
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;

    // You can handle the task creation logic here (e.g., saving to a database)

    console.log('Task Created:', taskName, taskDescription);

    // Hide the modal after creating the task
    hideCreateTaskModal();
  }

  // Function to show the Create Project modal
  function showCreateProjectModal() {
    document.getElementById('create-project-modal').classList.remove('hidden');
  }

  // Function to hide the Create Project modal
  function hideCreateProjectModal() {
    document.getElementById('create-project-modal').classList.add('hidden');
  }

  // Function to create a project (this can be customized to your needs)
  function createProject() {
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;

    // You can handle the project creation logic here (e.g., saving to a database)

    console.log('Project Created:', projectName, projectDescription);

    // Hide the modal after creating the project
    hideCreateProjectModal();
  }

  // Optional: Hide modals when clicking outside the modal container
  window.onclick = function(event) {
    if (event.target.classList.contains('fixed')) {
      hideCreateTaskModal();
      hideCreateProjectModal();
    }
  }

