import supabase from '../database/surpas-client.js'; 

const send_popupValidation = async (req, res, next) => {
  try {
    const { email, selectedBots, botPercentages, investmentAmount } = req.body;

    // Prepare data to be inserted into the database
    const dataToInsert = {
      email,
      bot1: selectedBots.includes('Bot 1'),
      bot2: selectedBots.includes('Bot 2'),
      bot3: selectedBots.includes('Bot 3'),
      bot1_percentages: botPercentages['Bot 1'] || 0,
      bot2_percentages: botPercentages['Bot 2'] || 0,
      bot3_percentages: botPercentages['Bot 3'] || 0,
      total_investment: investmentAmount
    };

    // Insert data into the database using Supabase client
    const { data, error } = await supabase.from('investment_data').insert([dataToInsert]);

    if (error) {
      throw error;
    }

    res.status(200).json({ success: true, message: 'Data saved successfully' }); // Send success message
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' }); // Send error message
  }
};

export default send_popupValidation;
