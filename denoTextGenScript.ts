console.log("Starting Deno Text Grabber...")
console.log("-Tim 25072021")
import { walkSync } from "https://deno.land/std@0.101.0/fs/mod.ts";




console.log(Deno.readDirSync('./src/lib/text/'))
for (const dirEntry of Deno.readDirSync("./src/lib/text")) {
  console.log(dirEntry.name);
}





let pagesDocs:Array<Object> = []
let devlogDocs:Array<Object> = []
let pagesDir = './src/lib/text/pages'





for (const entry of walkSync(pagesDir)) {
    console.log(entry.path);
    let entryTitle = (entry.path.slice(pagesDir.length - 1)).slice(0,-3)
    let entryTitleUrl = (entry.path.slice(pagesDir.length - 1)).slice(0,-3).toLowerCase().split(' ').join('_')

    
    if (entryTitle.length > 1) {
      let entryTitlePushObject = {path:"",title:"",markdown:"",url:"",html:""}
        entryTitlePushObject.title = entryTitle
        entryTitlePushObject.path = entry.path
        entryTitlePushObject.url = entryTitleUrl
        entryTitlePushObject.markdown = Deno.readTextFileSync(entry.path)
      pagesDocs.push(entryTitlePushObject)
    }
  }

let devlogDir = './src/lib/text/devlog'
for (const entry of walkSync(devlogDir)) {
    console.log(entry.path);
    let entryTitle = (entry.path.slice(devlogDir.length - 1)).slice(0,-3)
    let entryTitleUrl = (entry.path.slice(devlogDir.length - 1)).slice(0,-3).toLowerCase().split(' ').join('_')

    
    if (entryTitle.length > 1) {
      let entryTitlePushObject = {path:"",title:"",markdown:"",url:"",html:""}
        entryTitlePushObject.title = entryTitle
        entryTitlePushObject.path = entry.path
        entryTitlePushObject.url = entryTitleUrl
        entryTitlePushObject.markdown = Deno.readTextFileSync(entry.path)

      devlogDocs.push(entryTitlePushObject)
    }
  }
/**
 * write.ts
 */
 function writeJson(path: string, data: object): string {
    try {
      Deno.writeTextFileSync(path, JSON.stringify(data));
  
      return "Written to " + path;
    } catch (e) {
      return e.message;
    }
  }
  
  console.log(writeJson("./src/routes/info/_entries.json", pagesDocs));
  console.log(writeJson("./src/routes/devlog/_entries.json", devlogDocs));

  
  /**
   * Output: Written to ./data.json
   */