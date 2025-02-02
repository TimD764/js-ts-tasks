type Employee = {
  type: 'EMPLOYEE';
  name: string;
  login: string;
  surname?: string;
  address: {
    officeId: number;
    placeId: number;
  };
};

type Contractor = {
  type: 'CONTRACTOR';
  name: string;
  login: string;
  surname?: string;
  contractorCompanyName: string;
};

type User = Employee | Contractor;

function isEmployee(user: User): user is Employee {
  return user.type === 'EMPLOYEE';
}

function isContractor(user: User): user is Contractor {
  return user.type === 'CONTRACTOR';
}

/**
 * Groups users into EMPLOYEE and CONTRACTOR groups.
 * @param {Array<User>} users - Array of users to be grouped.
 * @returns {Object} - An object containing two arrays: `employees` and `contractors`.
 */
module.exports.groupUsers = function groupUsers(users: User[]): { employees: Employee[]; contractors: Contractor[] } {
  const groupedUsers: { employees: Employee[]; contractors: Contractor[] } = {
    employees: [],
    contractors: [],
  };

  for (const user of users) {
    if (isEmployee(user)) {
      groupedUsers.employees.push(user);
    } else if (isContractor(user)) {
      groupedUsers.contractors.push(user);
    }
  }

  return groupedUsers;
}


