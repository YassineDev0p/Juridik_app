const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'juridik_app',
password: 'yassine123',
port: 3000,
})

const getClients = (request, response) => {
pool.query('SELECT * FROM Client ', (error, results) => {
if (error) {
throw error
}
response.status(200).json(results.rows)
})
}

const createClient = (request, response) => {
    const {client_fname, client_lname, client_balance_amount} = request.body
    pool.query('INSERT INTO Client (client_fname, client_lname, client_balance_amount) VALUES ($1, $2, $3)',
    [client_fname, client_lname, client_balance_amount], (error, results) => {
    if (error) {
    throw error
    }
    response.status(201).send('Client Added')
    })
    }

const getAppoints = (request, response) => {    
    pool.query("SELECT * FROM Appointment ", (error, results) => {
    if (error) {
    throw error
    }
    response.status(202).json(results.rows)
    })
    }


const createAppoint = (request, response) => {
        const {client_id, appointment_date} = request.body
        pool.query('INSERT INTO Appointment (client_id, appointment_date) VALUES ($1, $2)',
        [client_id, appointment_date], (error, results) => {
        if (error) {
        throw error
        }
        response.status(203).send('Appointment Added')
        })
        }

        const createFile = (request, response) => {
            const {client_id} = request.body
            pool.query('INSERT INTO File (client_id) VALUES ($1)',
            [client_id], (error, results) => {
            if (error) {
            throw error
            }
            response.status(205).json({ message: 'File Added' });
            })
        }


 const getFiles = (request, response) => {    
    pool.query('SELECT * FROM File ', (error, results) => {
    if (error) {
    throw error
    }
    response.status(206).json(results.rows)
    })
    }
const getUpdates = (request, response) => {    
    pool.query('SELECT * FROM Update ', (error, results) => {
    if (error) {
    throw error
    }
    response.status(207).json(results.rows)
    })
    }

const createUpdate = (request, response) => {
    const {file_id, update_description } = request.body
    pool.query('INSERT INTO Update (file_id, update_description) VALUES ($1, $2)',
        [file_id, update_description ], (error, results) => {
        if (error) {
        throw error
        }
        response.status(208).send('Update Added')
        })
        }

const getFeedbacks = (request, response) => {    
            pool.query('SELECT * FROM Feedback ', (error, results) => {
            if (error) {
            throw error
            }
            response.status(209).json(results.rows)
            })
            }

 const createFeedback = (request, response) => {
    const {file_id, feedback_text  } = request.body
    pool.query('INSERT INTO Feedback (file_id, feedback_text) VALUES ($1, $2)',
    [file_id, feedback_text ], (error, results) => {
    if (error) {
    throw error
    }
    response.status(210).send('Feedback Added')
    })
    }
        
const getTransactions = (request, response) => {    
        pool.query('SELECT * FROM Transaction ', (error, results) => {
        if (error) {
        throw error
        }
        response.status(211).json(results.rows)
        })
        }

const createTransaction = (request, response) => {
            const {client_id, transaction_amount} = request.body
            pool.query('INSERT INTO Transaction (client_id, transaction_amount) VALUES ($1, $2)',
            [client_id,transaction_amount], (error, results) => {
            if (error) {
            throw error
            }
            response.status(212).json('Transaction Added')
            })
            }

            const changeAppointmentStatus = (request, response) => {
                const { appointment_id, new_status } = request.body;
              
                pool.query(
                  'SELECT change_appointment_status($1, $2)',
                  [appointment_id, new_status],
                  (error, results) => {
                    if (error) {
                      throw error;
                    }
                    response.status(213).json(results.rows);
                  }
                );
              };

              const update_file_progress = (request, response) => {
                const { file_id, file_progress } = request.body;
              
                pool.query(
                  'SELECT update_file_progress($1, $2)',
                  [file_id, file_progress],
                  (error, results) => {
                    if (error) {
                      throw error;
                    }
                    response.status(214).json(results.rows);
                  }
                );
              };

              const getbookedAppoints = (request, response) => {    
                pool.query("SELECT * FROM Appointment WHERE appointment_status= 'booked'", (error, results) => {
                if (error) {
                throw error
                }
                response.status(215).json(results.rows)
                })
                }

                const getcancelledAppoints = (request, response) => {    
                    pool.query("SELECT * FROM Appointment WHERE appointment_status= 'cancelled'", (error, results) => {
                    if (error) {
                    throw error
                    }
                    response.status(215).json(results.rows)
                    })
                    }

                    const getuserBookedAppointments = (request, response) => {
                      const { client_id } = request.params;
                    
                      pool.query(
                        'SELECT * FROM appointment WHERE client_id = $1 AND appointment_status = $2',
                        [client_id, 'booked'],
                        (error, results) => {
                          if (error) {
                            throw error;
                          }
                          response.status(216).json(results.rows);
                        }
                      );
                    };

                    const getuserCancelledAppointments = (request, response) => {
                      const { client_id } = request.params;
                    
                      pool.query(
                        'SELECT * FROM appointment WHERE client_id = $1 AND appointment_status = $2',
                        [client_id, 'cancelled'],
                        (error, results) => {
                          if (error) {
                            throw error;
                          }
                          response.status(217).json(results.rows);
                        }
                      );
                    };

                    const getuserPendingAppointments = (request, response) => {
                      const { client_id } = request.params;
                    
                      pool.query(
                        'SELECT * FROM appointment WHERE client_id = $1 AND appointment_status = $2',
                        [client_id, 'pending'],
                        (error, results) => {
                          if (error) {
                            throw error;
                          }
                          response.status(218).json(results.rows);
                        }
                      );
                    };

                    const getbalance = (request, response) => {
                      const { client_id } = request.params;
                    
                      pool.query(
                        'SELECT * FROM client WHERE client_id = $1',
                        [client_id],
                        (error, results) => {
                          if (error) {
                            throw error;
                          }
                          response.status(221).json(results.rows);
                        }
                      );
                    };               

const getuserfiles = (request, response) => {
  const { client_id } = request.params;

  pool.query(
    'SELECT * FROM file WHERE client_id = $1',
    [client_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(220).json(results.rows);
    }
  );
};

const getusertransactions = (request, response) => {
  const { client_id } = request.params;

  pool.query(
    'SELECT * FROM transaction WHERE client_id = $1',
    [client_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(221).json(results.rows);
    }
  );
};
const TransactionStats = (request, response) => {    
  pool.query("SELECT * FROM transaction_stats()", (error, results) => {
  if (error) {
  throw error
  }
  response.status(222).json(results.rows)
  })
  }

                    

module.exports = {
    getClients,
    createClient,
    getAppoints,
    changeAppointmentStatus,
    update_file_progress,
    createAppoint,
    createFile,
    getFiles,
    getUpdates,
    createUpdate,
    getFeedbacks,
    createFeedback,
    getTransactions,
    createTransaction,
    getbookedAppoints,
    getcancelledAppoints,
    getuserBookedAppointments,
    getuserCancelledAppointments,
    getuserPendingAppointments,
    getbalance,
    getuserfiles,
    getusertransactions,
    TransactionStats
    
    }