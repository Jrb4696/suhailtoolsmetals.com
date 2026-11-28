// The quote form's location lists: India's states and union territories, each with its main cities and
// industrial towns (A to Z). The form adds an "another town" choice to every list, so a site anywhere still fits.
// Tamil Nadu and Puducherry, where most of the work is, carry the longest lists.
export const states = [
  { name: 'Andhra Pradesh', cities: ['Anantapur', 'Guntur', 'Kadapa', 'Kakinada', 'Kurnool', 'Nellore', 'Rajahmundry', 'Sri City', 'Tirupati', 'Vijayawada', 'Visakhapatnam'] },
  { name: 'Arunachal Pradesh', cities: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang'] },
  { name: 'Assam', cities: ['Dibrugarh', 'Guwahati', 'Jorhat', 'Nagaon', 'Silchar', 'Tezpur', 'Tinsukia'] },
  { name: 'Bihar', cities: ['Begusarai', 'Bhagalpur', 'Darbhanga', 'Gaya', 'Muzaffarpur', 'Patna', 'Purnia'] },
  { name: 'Chhattisgarh', cities: ['Bhilai', 'Bilaspur', 'Durg', 'Korba', 'Raigarh', 'Raipur'] },
  { name: 'Goa', cities: ['Mapusa', 'Margao', 'Panaji', 'Ponda', 'Vasco da Gama'] },
  { name: 'Gujarat', cities: ['Ahmedabad', 'Ankleshwar', 'Bharuch', 'Bhavnagar', 'Gandhidham', 'Gandhinagar', 'Jamnagar', 'Rajkot', 'Surat', 'Vadodara', 'Vapi'] },
  { name: 'Haryana', cities: ['Ambala', 'Faridabad', 'Gurugram', 'Hisar', 'Karnal', 'Panipat', 'Rohtak', 'Sonipat', 'Yamunanagar'] },
  { name: 'Himachal Pradesh', cities: ['Baddi', 'Dharamshala', 'Kullu', 'Mandi', 'Shimla', 'Solan'] },
  { name: 'Jharkhand', cities: ['Bokaro Steel City', 'Deoghar', 'Dhanbad', 'Hazaribagh', 'Jamshedpur', 'Ranchi'] },
  { name: 'Karnataka', cities: ['Ballari', 'Belagavi', 'Bengaluru', 'Dharwad', 'Hubballi', 'Kalaburagi', 'Mangaluru', 'Mysuru', 'Shivamogga', 'Tumakuru', 'Udupi'] },
  { name: 'Kerala', cities: ['Alappuzha', 'Kannur', 'Kochi', 'Kollam', 'Kozhikode', 'Palakkad', 'Thiruvananthapuram', 'Thrissur'] },
  { name: 'Madhya Pradesh', cities: ['Bhopal', 'Dewas', 'Gwalior', 'Indore', 'Jabalpur', 'Pithampur', 'Sagar', 'Satna', 'Ujjain'] },
  { name: 'Maharashtra', cities: ['Amravati', 'Chhatrapati Sambhajinagar', 'Kolhapur', 'Mumbai', 'Nagpur', 'Nashik', 'Navi Mumbai', 'Pune', 'Solapur', 'Thane'] },
  { name: 'Manipur', cities: ['Churachandpur', 'Imphal', 'Thoubal'] },
  { name: 'Meghalaya', cities: ['Jowai', 'Shillong', 'Tura'] },
  { name: 'Mizoram', cities: ['Aizawl', 'Champhai', 'Lunglei'] },
  { name: 'Nagaland', cities: ['Dimapur', 'Kohima', 'Mokokchung'] },
  { name: 'Odisha', cities: ['Angul', 'Balasore', 'Berhampur', 'Bhubaneswar', 'Cuttack', 'Jharsuguda', 'Paradip', 'Rourkela', 'Sambalpur'] },
  { name: 'Punjab', cities: ['Amritsar', 'Bathinda', 'Hoshiarpur', 'Jalandhar', 'Ludhiana', 'Mohali', 'Patiala'] },
  { name: 'Rajasthan', cities: ['Ajmer', 'Alwar', 'Bhilwara', 'Bhiwadi', 'Bikaner', 'Jaipur', 'Jodhpur', 'Kota', 'Udaipur'] },
  { name: 'Sikkim', cities: ['Gangtok', 'Gyalshing', 'Mangan', 'Namchi'] },
  { name: 'Tamil Nadu', cities: ['Arakkonam', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Hosur', 'Kanchipuram', 'Karur', 'Krishnagiri', 'Kumbakonam', 'Madurai', 'Nagercoil', 'Namakkal', 'Pudukkottai', 'Ranipet', 'Salem', 'Sivakasi', 'Sriperumbudur', 'Thanjavur', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tiruppur', 'Tiruvallur', 'Vellore', 'Villupuram'] },
  { name: 'Telangana', cities: ['Hyderabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Nizamabad', 'Ramagundam', 'Sangareddy', 'Warangal'] },
  { name: 'Tripura', cities: ['Agartala', 'Dharmanagar', 'Udaipur'] },
  { name: 'Uttar Pradesh', cities: ['Agra', 'Aligarh', 'Bareilly', 'Ghaziabad', 'Gorakhpur', 'Greater Noida', 'Kanpur', 'Lucknow', 'Meerut', 'Noida', 'Prayagraj', 'Varanasi'] },
  { name: 'Uttarakhand', cities: ['Dehradun', 'Haldwani', 'Haridwar', 'Kashipur', 'Roorkee', 'Rudrapur'] },
  { name: 'West Bengal', cities: ['Asansol', 'Bardhaman', 'Durgapur', 'Haldia', 'Howrah', 'Kharagpur', 'Kolkata', 'Siliguri'] },
];

export const territories = [
  { name: 'Andaman and Nicobar Islands', cities: ['Sri Vijaya Puram (Port Blair)'] },
  { name: 'Chandigarh', cities: ['Chandigarh'] },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', cities: ['Daman', 'Diu', 'Silvassa'] },
  { name: 'Delhi', cities: ['Delhi', 'New Delhi'] },
  { name: 'Jammu and Kashmir', cities: ['Anantnag', 'Baramulla', 'Jammu', 'Kathua', 'Srinagar'] },
  { name: 'Ladakh', cities: ['Kargil', 'Leh'] },
  { name: 'Lakshadweep', cities: ['Agatti', 'Kavaratti'] },
  { name: 'Puducherry', cities: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'] },
];

export const citiesOf = (name) => [...states, ...territories].find((p) => p.name === name)?.cities || [];
