import Student from "./models/Student.js";
import BankAccount from "./models/BankAccount.js";

const mhs1 = new Student ("budi", 21, "221110001", "informatika");
mhs1.greet();
mhs1.study();

const rekeningMhs = new BankAccount(mhs1.name);
rekeningMhs.deposit(2000000);
rekeningMhs.withdraw(50000);

document.getElementById("output").innerHTML = `
<h2>Data Mahasiswa</h2>
<p><strong>nama :</strong> ${mhs1.name}</p>
<p><strong>Umur : </strong> ${mhs1.age}</p>
<p><strong>nim : </strong> ${mhs1.nim}</p>
<p><strong>Jurusan : </strong> ${mhs1.major}</p>
<p><strong>Saldo akhir : </strong>
Rp${rekeningMhs.getBalance().toLocaleString(`id-ID`)}</p>`;