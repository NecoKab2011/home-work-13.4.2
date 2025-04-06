let users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    return Promise.resolve(
      allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user
      )
    );
  };

  const loggerTable = updatedUsers => {
    console.table(updatedUsers);
    users = updatedUsers;
  };

  document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('toggle-mango')) {
        toggleUserState(users, 'Mango').then(loggerTable);
      }
      if (button.classList.contains('toggle-lux')) {
        toggleUserState(users, 'Lux').then(loggerTable);
      }
    });
  });