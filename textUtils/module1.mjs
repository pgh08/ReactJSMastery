import ui, {a, c, d} from './module2.mjs';
// Only default mention in the module2.mjs file is imported.
// To export non default elements include it in flower bracket in import.
// Things which are not exported by default must be called with same name used in other file.
console.log(ui);
console.log(a);
console.log(d);