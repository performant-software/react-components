import"./index.es30-Cot0rGUw.js";import"./index-C0dDX-lL.js";import{s as r}from"./index.es12-CY8JxLP9.js";import{t as s}from"./index.es98-BY1tg83M.js";class t extends s{getPayloadKeys(){return["table_name","column_name","data_type","required","searchable","allow_multiple","options","order"]}getParameterName(){return"user_defined_field"}}const d=new t;class i extends r{fetchDataTypes(){return this.getAxios().get("/user_defined_fields/data_types")}fetchTables(){return this.getAxios().get("/user_defined_fields/tables")}getBaseUrl(){return"/user_defined_fields/user_defined_fields"}getTransform(){return d}}const o=new i;export{o as U};