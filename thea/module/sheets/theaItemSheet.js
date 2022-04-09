export default class theaItemSheet extends ItemSheet {
  
static get defaultOptions() {

    return mergeObject(super.defaultOptions, {
        width: 530,
        height: 340,
        classes: ["thea", "sheet", "item"]

    });

}

get template() {
    return `systems/thea/templates/sheets/${this.item.data.type}-sheet.html`;
}

    getData() {
        const baseData = super.getData();
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.thea
        };

        return sheetData;
    }

}