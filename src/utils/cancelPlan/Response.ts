import {json2xmlParser} from "../../shared/json2xml";

export default class Response {
    static mountSoapResponse(response: any):any {
        return json2xmlParser({
            '@': {
                'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
                'xmlns:v1': "http://www.ameninoti.com.br/EBO/Common/V1",
            },
            'soapenv:Header': {},
            'soapenv:Body': {
                'v2:CancelPlanResponse': {
                    "@": {
                        'xmlns:v2': 'http://www.amenino.com.br/BusinessActivity/AMeninoClub/V2',
                    },
                    'v2:serviceRequest': response.ServiceRequest
                }
            }
        })
    }

    static mountJsonResponse(response: any) {
        return { 'serviceRequest': response.ServiceRequest };
    }
}
