import onpdp from "../products/onpdp";

class isiDataJamaahBooking{

    constructor(){
        this.namajamaah = this.generateRandomName();
        this.lahirjamaah = this.generateRandomDate();
        this.jenisKelamin = null; 
    }

    generateRandomName() {
        const names = ["Ahmad", "Budi", "Citra", "Dewi", "Eka", "Fajar", "Gita", "Hadi"];
        const lastNames = ["Putra", "Wijaya", "Saputra", "Sari", "Hidayat", "Purnama"];
        return `${names[Math.floor(Math.random() * names.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    }

    //generateRandomGender() {
        //return Math.random() < 0.5 ? "Laki-laki" : "Perempuan";      
    //}

    selectRandomGender() {
        // Klik dropdown untuk membuka opsi
        cy.get(':nth-child(2) > .flex-col > :nth-child(1) > .mt-1 > .dropdown > div.h-full > #menu-button').click();
        
        // Pilih secara acak antara #menu-item-0 (Laki-laki) atau #menu-item-1 (Perempuan)
        const randomOption = Math.random() < 0.5 ? '#menu-item-0' : '#menu-item-1';
        cy.get(randomOption).should('be.visible').click();;
    }

    generateRandomDate() {
        const year = Math.floor(Math.random() * (2021 - 1970) + 1970); // Tahun antara 1970 - 2021
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1; // Hindari tanggal 30/31 agar aman
        return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    }

    isiformjamaahbooking(){
        cy.wait(5000);
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .w-full').type(this.namajamaah);
        this.selectRandomGender();
        cy.get("input[name='date']").eq(0).type(this.generateRandomDate({force :true }));
    }
}

export default new isiDataJamaahBooking();