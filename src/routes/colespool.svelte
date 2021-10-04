<script context="module">
    import xlsx from 'xlsx'
    let sheetLocation = 'https://deathmettastorage.s3.us-west-2.amazonaws.com/files/sheet.ods'

    // This is an example from the xlsx website, going to svveltify it
    // https://www.npmjs.com/package/xlsx
    // var req = new XMLHttpRequest();
    // req.open("GET",sheetLocation,true)
    // req.responseType = "arraybuffer";
    // req.onload = function(e) {
    //     var data = new Uint8Array(req.response);
    //     var workbook = xlsx.read(data,{type:"array"})
    //     console.log(workbook)
    // }

    async () => {
        const res = await fetch(sheetLocation)
        console.log(res)
        let workbook = xlsx.read(res, {type:"array"})
        console.log(workbook)
        return {data: workbook}
    }
        
    



</script>

<script>
    export let data
    console.log(data)

</script>

<div>
    <p>Place data here</p>
</div>

<style>
    p {
        color: orange;
    }
</style>