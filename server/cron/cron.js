import cron from 'node-cron';
import db from '../db';
import { createAndUpdateSummary } from '../controllers/activitySummaries';
import { getAll as getAllTransactions } from '../controllers/transactions';
import { dumpEmail } from '../controllers/emailSender';

// export const cronTasks = cron.schedule('*/1 * * * * *', function(){
// 	createAndUpdateSummary();
// 	getAllTransactions( null, null, result => {
// 		dumpEmail( result );
// 	})
// 	cronTasks.destroy();
// })