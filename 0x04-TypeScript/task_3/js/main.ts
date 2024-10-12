/// <reference path="./crud.d.ts" />
import {RowID, RowElement} from "./interface";
import * as CRUD from "./crud";
import {insertRow} from "./crud";

const row : RowElement = {
    firstName: "Guillaume", lastName: "Salva"
}

// @ts-ignore
const newRowId: RowID = CRUD.insertRow(row);
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement ={
    firstName: "Guillaume", lastName: "Salva", age: 23
};
CRUD.updateRow(newRowId, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(newRowId);
