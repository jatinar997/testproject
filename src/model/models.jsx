class listPayload {
  constructor(
    pageNumber,
    pageSize,
    cityId,
    plateCode,
    plateNumber,
    plateNumberSize,
    plateAddType,
    userId,
    searchType,
    isPremium
  ) {
    this.pageNumber = pageNumber ? pageNumber : 1;
    this.pageSize = pageSize ? pageSize : 10;
    this.cityId = cityId ? cityId : null;
    this.plateCode = plateCode ? plateCode : null;
    this.plateNumber = plateNumber ?  plateNumber : null;
    this.plateNumberSize = plateNumberSize ? plateNumberSize : null;
    this.plateAddType = plateAddType ? plateAddType : 2;
    this.userId = userId ? userId : null;
    this.searchType = searchType ? searchType : 0;
    this.isPremium = isPremium ? isPremium : false;
    this.numPos1 = null;
    this.numPos2 = null;
    this.numPos3 = null;
    this.numPos4 = null;
    this.numPos5 = null;
  }
}

export { listPayload };
