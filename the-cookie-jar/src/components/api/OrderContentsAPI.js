import axios from 'axios';

const OrderContentsURL = "http://localhost:8081/ordercontents";

class orderContentsService {
    
    getAllOrderContents() {
        return axios.get(OrderContentsURL)
    };
}

console.log(orderContentsService.getAllOrderContents);
export default new orderContentsService();

