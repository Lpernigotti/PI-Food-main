
const { getInfoApi} = require('./getInfoApi');
const { getInfoDB } = require('./getInfoDB');

const getAllInfo = async () => {
    const apiInfo = await getInfoApi()
    const dbInfo = await getInfoDB()
    const allInfo = apiInfo.concat(dbInfo);

    return allInfo;
};

module.exports = {getAllInfo};