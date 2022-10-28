<!-- TODO: template -->
<template>
  <div>
    <h2>사용자정보</h2>
    <table>
      <thead>
        <tr>
          <th v-for="(infoTitle, i) in infoTitles" :key="i">{{ infoTitle }}</th>
        </tr>
      </thead>
      <tbody v-if="paginatedData.length !== 0">
        <!-- <tbody v-if="paginatedData"> -->
        <tr
          class="user-info-click"
          v-for="user in paginatedData"
          :key="user.id"
          :data-id="user.id"
          @click="detail"
        >
          <td>{{ user?.id }}</td>
          <td>{{ user?.name }}</td>
          <td>{{ user?.username }}</td>
          <td>{{ user?.company.name }}</td>
        </tr>
      </tbody>
      <tbody v-else-if="!paginatedData">
        <tr>
          <td>asd</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" v-if="paginatedData.length >= 1">
            <button @click="backPage"><fa icon="angle-left" /></button>
            <button
              v-for="item in Math.ceil(data.length / perPage)"
              :key="item"
              @click="() => goToPage(item)"
            >
              {{ item }}
            </button>
            <button @click="nextPage"><fa icon="angle-right" /></button>
          </td>
          <td colspan="4" v-else-if="paginatedData.length === 0">
            조회할 데이터가 없습니다.
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

  <UserDetail
    v-if="displayDetail"
    :detailItem="detailItem"
    @closeDetail="close"
  />

  <!-- <p>{{ propsUserData }}</p> -->
</template>

<!-- TODO: script -->
<script>
import axios from '../config/axios.js';
import { ref, computed, toRefs } from 'vue';

/** Component */
import UserDetail from '@/components/UserDetail.vue';
// import PaginationList from '@/components/PaginationList.vue';

/**
 * @props userData (Array) - 유저정보, 검색한 유저정보 / UserManageView.vue
 */
export default {
  name: 'UserInfo',

  props: {
    userData: Array
  },

  data() {
    return {
      infoTitles: ['#', '성명', '닉네임', '회사명'],
      detailItem: [],
      displayDetail: false,
      isLoading: false,
      propsData: []
    };
  },
  // computed: {
  //   propsTest() {
  //     const test = this.userData;
  //     console.log(test);
  //     return test;
  //   }
  // },

  methods: {
    detail(e) {
      const currentNum = e.currentTarget.dataset.id;
      this.displayDetail = true;

      /**
       * @description userItem - 사용자 정보 클릭시 단일 데이터 호출
       */
      const userItem = async () => {
        try {
          this.$emit('loadingCtl', true);

          const { data } = await axios.get(`/users?id=${currentNum}`);
          this.detailItem = data;
        } catch (err) {
          alert(err.message);
        } finally {
          this.$emit('loadingCtl', false);
        }
      };
      userItem();
    },
    close() {
      this.displayDetail = false;
    }
  },

  components: {
    UserDetail
    // PaginationList
  },

  emits: ['loadingCtl'],

  // watch: {
  //   /**
  //    * @description props로 받은 userData의 데이터 변경 확인
  //    * - 보류
  //    */
  //   userData() {
  //     this.propsUserData = this.userData;
  //   }
  // },

  setup(props) {
    console.log('그냥 호출>>', props.userData);

    setTimeout(() => {
      console.log('시간차 호출>>', props.userData);
    }, 500);
    // let data = null;
    // console.log(data);

    // setTimeout(() => {
    //   const { userData } = toRefs(props);
    //   console.log(userData.value);

    //   data = userData.value;
    // }, 1000);

    // const test = reactive({
    //   userData: computed(() => props.userData)
    // });
    // console.log(test);
    const { userData } = toRefs(props);
    const data = userData.value;

    // eslint-disable-next-line prefer-const
    let page = ref(1);

    // 한 페이지에 보여질 리스트 수
    const perPage = 3;

    const paginatedData = computed(() =>
      data.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const nextPage = () => {
      if (page.value !== Math.ceil(data.length / perPage)) {
        page.value += 1;
      }
    };

    const backPage = () => {
      if (page.value !== 1) {
        page.value -= 1;
      }
    };

    const goToPage = (numPage) => {
      page.value = numPage;
    };

    return { data, paginatedData, perPage, page, nextPage, backPage, goToPage };
  }
};
</script>

<!-- TODO: style -->
<style scoped>
h2 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

.user-info-click {
  cursor: pointer;
}

.user-info-click:hover {
  background-color: #eee;
}

th {
  padding: 10px;
  border: 1px solid #222;
  background-color: #e5e5e5;
}

td {
  padding: 10px;
  border: 1px solid #222;
}
</style>
