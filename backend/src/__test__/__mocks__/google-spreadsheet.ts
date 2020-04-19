class GoogleSpreadsheet {
  public sheetsByIndex = [new GoogleSpreadsheetWorksheet()];

  async useServiceAccountAuth() {
    return Promise.resolve(true);
  }

  async loadInfo() {
    return Promise.resolve(true);
  }
}

class GoogleSpreadsheetWorksheet {
 async getRows(): Promise<any> {
   return [{
     Company: 'Yapily',
     Roles: "Software Engineer",
     'Job Type': "Permanent",
     Locations: "London, UK",
     'Apply Link': "https://jobs.link",
     'Last Updated': "April 8",
     Category: "Computer Software",
     Active: 1,
     updatedAt: new Date,
     createdAt: new Date,
   }]
 }
}

export {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet
}
