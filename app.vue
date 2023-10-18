<script setup>
const form = ref({})

const { execute, error } = useFetch('/api/save-dates', { method: 'POST', body: form, watch: false, immediate: false })
const { data, refresh } = useFetch('/api/get-dates')

async function save() {
  await execute()
  refresh()
}
</script>

<template>
  <div>
    {{ error }}
    <br>
    <el-form label-width="120">
      <el-form-item label="Date field">
        <el-date-picker v-model="form.dateTest" value-format="YYYY-MM-DD" format="DD/MM/YYYY" />
        &nbsp;
        {{ form.dateTest }}
      </el-form-item>

      <el-form-item label=" Timestamp field">
        <el-date-picker v-model="form.timestampTest" type="datetime" value-format="YYYY-MM-DD HH:mm" format="DD/MM/YYYY HH:mm" />
        &nbsp;
        {{ form.timestampTest }}
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="save()">
      Save
    </el-button>

    <el-button type="success" @click="refresh()">
      Search
    </el-button>

    <el-table :data="data">
      <el-table-column prop="dateTest" label="Date" />
      <el-table-column prop="timestampTest" label="Timestamp" />
    </el-table>
  </div>
</template>
