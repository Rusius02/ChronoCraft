import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'chronoCraft.db',
    location: 'default',
  },
  () => {
    console.log("Database opened successfully");
  },
  error => {
    console.error("Error opening database: ", error);
  }
);

// Setup Database and Tables
export const setupDatabase = () => {
  db.transaction(tx => {
    console.log('Setting up the database...');
    // Create table for Plans
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Plans (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)',
      [],
      () => console.log('Plans table created or already exists'),
      (tx, error) => console.error('Error creating Plans table:', error)
    );
    // Create table for Activities
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Activities (id INTEGER PRIMARY KEY AUTOINCREMENT, planId INTEGER, name TEXT, description TEXT, duration INTEGER, FOREIGN KEY(planId) REFERENCES Plans(id))',
      [],
      () => console.log('Activities table created or already exists'),
      (tx, error) => console.error('Error creating Activities table:', error)
    );
  });
};

// Function to add a new plan
export const addPlan = (name) => {
  return new Promise((resolve, reject) => {
    console.log('Adding new plan:', name); // Log the plan name being added
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Plans (name) VALUES (?)',
        [name],
        (tx, result) => {
          console.log('Plan added successfully:', result); // Success log
          resolve(result);
        },
        (tx, error) => {
          console.error('Error adding plan:', error); // Error log
          reject(error);
        }
      );
    });
  });
};

// Function to add a new activity to a specific plan
export const addActivity = (planId, name, description, duration) => {
  return new Promise((resolve, reject) => {
    console.log(`Adding activity to Plan ID ${planId}:`, name, description, duration); // Log activity details
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Activities (planId, name, description, duration) VALUES (?, ?, ?, ?)',
        [planId, name, description, duration],
        (tx, result) => {
          console.log('Activity added successfully:', result); // Success log
          resolve(result);
        },
        (tx, error) => {
          console.error('Error adding activity:', error); // Error log
          reject(error);
        }
      );
    });
  });
};

// Function to retrieve all plans
export const getPlans = () => {
  return new Promise((resolve, reject) => {
    console.log('Fetching all plans...'); // Log fetch action
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Plans',
        [],
        (tx, results) => {
          const plans = [];
          for (let i = 0; i < results.rows.length; i++) {
            plans.push(results.rows.item(i));
          }
          console.log('Plans fetched successfully:', plans); // Success log
          resolve(plans);
        },
        (tx, error) => {
          console.error('Error fetching plans:', error); // Error log
          reject(error);
        }
      );
    });
  });
};
// Récupérer un plan spécifique par ID
export const getPlanById = (planId) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM Plans WHERE id = ?',
          [planId],
          (tx, results) => {
            if (results.rows.length > 0) {
              resolve(results.rows.item(0)); // Retourne le premier résultat
            } else {
              reject('Plan non trouvé');
            }
          },
          (tx, error) => reject(error)
        );
      });
    });
  };
  
  // Récupérer les activités pour un plan donné
  export const getActivitiesForPlan = (planId) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM Activities WHERE planId = ?',
          [planId],
          (tx, results) => {
            const activities = [];
            for (let i = 0; i < results.rows.length; i++) {
              activities.push(results.rows.item(i));
            }
            resolve(activities);
          },
          (tx, error) => reject(error)
        );
      });
    });
  };
  