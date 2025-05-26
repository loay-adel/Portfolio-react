import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Header
      home: "Home",
      cart: "Cart",
      change_table: "Change Table Number",
      sign_out: "Sign Out",

      // Home Page
      your_table_number: "Your table number",
      ice_cream: "Ice Cream",
      drinks: "Drinks",
      food: "Food",
      all: "All",
      sar: "SAR",
      add_to_cart: "Add to cart",
      view_cart: "View cart",

      // Cart
      empty_cart: "Your cart is empty",
      decrease_quantity: "Decrease quantity",
      increase_quantity: "Increase quantity",
      remove_item: "Remove item",
      total: "Total",
      confirm_order: "Confirm Order",

      //cart-
      enter_table_prompt: "Enter table number (leave blank for takeaway):",
      order_created: "Order #{{id}} created successfully!",
      go_back: "Go back",

      // Menu Items
      food_item_1: "BBQ Chicken Pizza",
      food_item_2: "Ranch Chicken Pizza",
      food_item_3: "Vegetable Pizza",
      food_item_4: "Margherita Pizza",
      food_item_5: "Pepperoni Pizza",
      food_item_6: "Mixed BBQ & Ranch Pizza",
      food_item_7: "Mixed Veggie & Pepperoni Pizza",
      food_item_8: "Esh El Bulbul",
      food_item_9: "Crispy Chicken Cheeseburger Meal",
      food_item_10: "Chicken Cheese Tortilla Strips Meal",
      food_item_11: "Kids Cheeseburger Meal",
      food_item_12: "Kids Nuggets Meal",
      food_item_13: "Cheesy Fries",
      food_item_14: "Fries",

      // Table
      table: "table",
      select_prompt: "Click on your table number",
      selected_title: "Number Selected",
      selected_message: "You selected table number: {{number}}",
      selected_number: "Selected Number",
      chooseTable: "You didn't choose table yet",
      ok: "OK",

      // order state

      pending: "Pending",
      preparing: "Preparing",
      ready_to_pickup: "Ready to Pickup",
      done: "Done",
      default: "Unknown",

      // New keys
      fetch_error: "There was an error fetching the data.",
      invalid_price: "Invalid price entered.",
      product_updated: "Product updated successfully.",
      product_added: "Product added to the cart.",
      save_error: "Error saving data.",
      menu_items: "Menu Items",
      add_item: "Add Item",
      edit_item: "Edit Item",
      name: "Name",
      price: "Price",
      select_category: "Select Category",
      add_new_category: "Add New Category",
      enter_new_category: "Enter New Category",
      save: "Save",
      close_cart: "Close Cart",
      remove_item_confirm: "Are you sure you want to remove this item?",
      remove_item_message: "Item removed successfully.",
      tax: "tax",
      remove: "Remove",
      cancel: "Cancel",
      removed: "Removed",
      item_removed: "Item removed successfully.",
      order_success_title: "Order Confirmed!",
      order_success_message: "Your order has been placed successfully.",
      order_error_title: "Order Failed",
      order_error_message: "Something went wrong while placing the order.",
      table_number_placeholder: "Enter table number",
      table_number_required: "Table number is required.",
      confirm: "Confirm",
      continue_shopping: "Continue Shopping",
      previous_orders: "Previous Orders",
    },
  },
  ar: {
    translation: {
      // Header
      home: "الرئيسية",
      cart: "السلة",
      change_table: "تغيير رقم الطاولة",
      sign_out: "تسجيل خروج",

      // Home Page
      your_table_number: "رقم طاولتك",
      ice_cream: "آيس كريم",
      drinks: "مشروبات",
      food: "طعام",
      all: "الكل",
      sar: "ر.س",
      add_to_cart: "أضف إلى السلة",
      view_cart: "عرض السلة",

      // Cart
      empty_cart: "سلة التسوق فارغة",
      decrease_quantity: "تقليل الكمية",
      increase_quantity: "زيادة الكمية",
      remove_item: "إزالة العنصر",
      total: "المجموع",
      confirm_order: "تأكيد الطلب",

      //cart
      enter_table_prompt: "أدخل رقم الطاولة (اتركه فارغًا للسفري):",
      order_created: "تم إنشاء الطلب رقم #{{id}} بنجاح!",
      go_back: "عودة للخلف",

      // Menu Items
      food_item_1: "بيتزا دجاج باربكيو",
      food_item_2: "بيتزا دجاج رانش",
      food_item_3: "بيتزا خضار",
      food_item_4: "بيتزا مارغريتا",
      food_item_5: "بيتزا بيبروني",
      food_item_6: "بيتزا ميكس باربكيو و رانش",
      food_item_7: "بيتزا ميكس خضار و بيبروني",
      food_item_8: "عش البلبل",
      food_item_9: "وجبة برجر دجاج مقرمش بالجبن",
      food_item_10: "وجبة شرائح دجاج بالتورتيلا والجبن",
      food_item_11: "وجبة برجر جبن للأطفال",
      food_item_12: "وجبة ناجتس للأطفال",
      food_item_13: "بطاطس بالجبن",
      food_item_14: "بطاطس",

      // Table
      table: "طاوله",
      select_prompt: "اختر رقم الطاوله",
      selected_title: "تم اختيار رقم الطاولة",
      selected_message: "لقد اختارت  الطاوله رقم: {{number}}",
      selected_number: "الرقم المختار",
      chooseTable: "لم تختر طاوله بعد",
      ok: "موافق",

      // order state

      pending: "قيد الانتظار",
      preparing: "جارٍ التحضير",
      ready_to_pickup: "جاهز للاستلام",
      done: "تم الانتهاء",
      default: "غير محدد",

      // New keys
      fetch_error: "حدث خطأ أثناء جلب البيانات.",
      invalid_price: "سعر غير صالح تم إدخاله.",
      product_updated: "تم تحديث المنتج بنجاح.",
      product_added: "تم إضافة المنتج إلى السلة.",
      save_error: "حدث خطأ أثناء حفظ البيانات.",
      menu_items: "عناصر القائمة",
      add_item: "إضافة عنصر",
      edit_item: "تعديل العنصر",
      name: "الاسم",
      price: "السعر",
      select_category: "اختر الفئة",
      add_new_category: "إضافة فئة جديدة",
      enter_new_category: "أدخل فئة جديدة",
      save: "حفظ",
      close_cart: "إغلاق السلة",
      remove_item_confirm: "هل أنت متأكد من أنك تريد إزالة هذا العنصر؟",
      remove_item_message: "تم إزالة العنصر بنجاح.",
      tax: "ضريبة",
      remove: "إزالة",
      cancel: "إلغاء",
      removed: "تمت الإزالة",
      item_removed: "تم إزالة العنصر بنجاح.",
      order_success_title: "تم تأكيد الطلب!",
      order_success_message: "تم إرسال طلبك بنجاح.",
      order_error_title: "فشل في الطلب",
      order_error_message: "حدث خطأ أثناء إرسال الطلب.",
      table_number_placeholder: "أدخل رقم الطاولة",
      table_number_required: "رقم الطاولة مطلوب.",
      confirm: "تأكيد",
      continue_shopping: "متابعة التسوق",
      previous_orders: "الطلبات السابقة",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
