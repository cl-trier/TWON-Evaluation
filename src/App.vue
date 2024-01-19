<template>

  <Header projectLink="https://twon-project.eu/">

    <template v-slot:headline>
      <span>Evaluating LLM-generated social media content</span>
    </template>
    <template v-slot:excerpt>
      To analyze the quality of machine-generated social media content using Large Language Models (LLMs), we ask you to
      evaluate the authenticity of a selection of content.
    </template>

  </Header>

  <main id="main" class="container mx-auto px-4 py-8 lg:py-12">

    <Headline>Step 1: Upload your dataset:</Headline>

    <Paragraph>
      Upload a provided JSON dataset. In general, the raw data is handed out by the research group. Note that the
      dataset contains records for the annotation filled with None values. During the annotation process on the website,
      you fill in those records and can download the updated dataset. The application automatically ignores already
      annotated samples and only shows None filled records. Thus, you can stop annotating in between, download a partly
      finished dataset, and then re-upload it for finishing. The app assumes the following data structure:
    </Paragraph>

    <div class="w-full md:w-6/12 mx-auto">
      <vue-json-pretty :data="dataSample" class="mb-4"/>
      <FileUpload @change="upload($event)"/>
    </div>

    <Divider/>

    <Headline>Step 2: Evaluate the authenticity of posts:</Headline>

    <Paragraph>
      Categorize the authenticity of the following posts one by one. We utilize a 5-step scale ranging from low (1) to
      high (5) for the persona/topic alignment and the overall authenticity. The persona/topic alignment evaluates the
      degree to which the content generated matches the characteristics of the persona or the platform described. The
      overall authenticity measures the general appearance of how humane and fitting the generated content resembles a
      human social media post. You can use the Left and Right Arrow keys inside the box to navigate.
    </Paragraph>

    <Annotation v-if="uploaded" :data="data"/>

    <Alert v-if="!uploaded && !annotated" type="error">
      <p class="font-bold">You have not uploaded a dataset.</p>
      <p class="text-sm">Make sure to upload a formatted dataset provided by the researcher team.</p>
    </Alert>

    <Alert v-if="!uploaded && annotated" type="success">
      <p class="font-bold">Your dataset is already annotated.</p>
      <p class="text-sm">Make sure to upload a dataset containing not-annotated samples.</p>
    </Alert>

    <Divider/>

    <Headline>Step 3: Submit the results</Headline>

    <Paragraph>
      After,finishing the evaluation, download your data to your local file system. We save results as a plain-text
      JSON file. Thus, interested ones can examine their file and inspect the collected data. We ask not to modify the
      contents as that would complicate evaluation.
    </Paragraph>

    <Paragraph>
      Finally, if fully annotated, upload the received file to the cloud storage provided by the universities of
      Rhineland-Palatinate.
      We opt for the two stages approach to ensure data transparency and limit the usage of non-education service
      providers.
    </Paragraph>

    <Button @click="download">
      1. Download data
    </Button>
    <ButtonLink href="https://twon-project.eu/">
      2. Upload to Cloud
    </ButtonLink>
  </main>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import Headline from "@/components/atoms/Headline.vue"
import Paragraph from "@/components/atoms/Paragraph.vue"
import Button from "@/components/atoms/Button.vue"
import Divider from "@/components/atoms/Divider.vue"
import Alert from "./components/atoms/Alert.vue"
import FileUpload from "./components/atoms/FileUpload.vue"
import ButtonLink from "./components/atoms/ButtonLink.vue"

import Header from "@/components/Header.vue"
import Annotation from "@/components/Annotation.vue"

import {useDataStore} from '@/store'

import {downloadJSON, uploadJSON} from "@/common"

import data_sample from "@/assets/data_sample.json"


export default {
  components: {
    ButtonLink,
    FileUpload,
    Alert,
    VueJsonPretty,
    Headline,
    Paragraph,
    Button,
    Divider,
    Header,
    Annotation,
  },
  data() {
    return {
      data: [],
      uploaded: false,
      annotated: false,
      dataSample: data_sample
    }
  },
  methods: {
    async upload(event) {
      /**
       * Uploads a file and sets the data for the component.
       *
       * @param {Event} event - The event object containing the file to upload.
       */
      const data = await uploadJSON(event.target.files[0])

      if (!data.length) {
        this.annotated = true
        return
      }

      useDataStore().setData(data)
      this.data = useDataStore().getDataRaw
      this.uploaded = true
    },
    download() {
      /**
       * Downloads JSON data.
       */
      downloadJSON(useDataStore().getData)
    }
  }
}
</script>