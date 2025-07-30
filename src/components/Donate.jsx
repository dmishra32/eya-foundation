import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Droplets, 
  UtensilsCrossed, 
  Cake, 
  ShowerHead, 
  GraduationCap, 
  Users, 
  TreePine, 
  Baby, 
  Shield,
  CreditCard,
  Smartphone,
  Wallet,
  ArrowRight,
  ArrowLeft,
  Check,
  Star,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Gift,
  Plus
} from 'lucide-react';

const DonationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    cause: '',
    amount: '',
    customAmount: '',
    frequency: 'one-time', // 'one-time' or 'monthly'
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: '',
      pincode: ''
    },
    paymentMethod: 'upi', // 'upi', 'wallet', 'card'
    panCard: '',
    terms: false
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const causes = [
    { id: 'cleanliness', name: 'Cleanliness Drive', icon: ShowerHead, color: 'from-green-500 to-emerald-600', impact: '150+ locations cleaned' },
    { id: 'blood', name: 'Blood Donation', icon: Droplets, color: 'from-red-500 to-rose-600', impact: '500+ units donated' },
    { id: 'food', name: 'Food Donation', icon: UtensilsCrossed, color: 'from-orange-500 to-amber-600', impact: '10,000+ meals served' },
    { id: 'birthday', name: 'Birthday Celebrations', icon: Cake, color: 'from-pink-500 to-purple-600', impact: '200+ birthdays celebrated' },
    { id: 'birthday-meals', name: 'Birthday Meals', icon: Heart, color: 'from-violet-500 to-indigo-600', impact: '300+ special meals' },
    { id: 'sanitation', name: 'Sanitation Programs', icon: ShowerHead, color: 'from-blue-500 to-cyan-600', impact: '50+ facilities built' },
    { id: 'school-kit', name: 'School Kit Distribution', icon: GraduationCap, color: 'from-teal-500 to-green-600', impact: '1,000+ kits distributed' },
    { id: 'marginalized', name: 'Marginalized Communities', icon: Users, color: 'from-indigo-500 to-blue-600', impact: '25+ communities supported' },
    { id: 'tree', name: 'Tree Plantation', icon: TreePine, color: 'from-emerald-500 to-teal-600', impact: '5,000+ trees planted' },
    { id: 'orphanage', name: 'Orphanage Visits', icon: Baby, color: 'from-yellow-500 to-orange-600', impact: '15+ orphanages supported' },
    { id: 'old-age', name: 'Old Age Home Care', icon: Shield, color: 'from-purple-500 to-pink-600', impact: '12+ homes visited regularly' },
    { id: 'other', name: 'Other Cause', icon: Plus, color: 'from-gray-500 to-slate-600', impact: 'General fund' }
  ];

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000, 25000];

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Pay using UPI apps' },
    { id: 'wallet', name: 'Wallet', icon: Wallet, description: 'PayTM, PhonePe, etc.' },
    { id: 'card', name: 'Card', icon: CreditCard, description: 'Credit/Debit Card' }
  ];

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.cause) newErrors.cause = 'Please select a cause';
      if (!formData.amount && !formData.customAmount) newErrors.amount = 'Please select or enter an amount';
      if (formData.customAmount && formData.customAmount < 100) newErrors.customAmount = 'Minimum donation is ₹100';
    }
    
    if (step === 2) {
      const { personalInfo } = formData;
      if (!personalInfo.firstName) newErrors.firstName = 'First name is required';
      if (!personalInfo.lastName) newErrors.lastName = 'Last name is required';
      if (!personalInfo.email) newErrors.email = 'Email is required';
      if (!personalInfo.phone) newErrors.phone = 'Phone number is required';
      if (!personalInfo.address) newErrors.address = 'Address is required';
      if (!personalInfo.city) newErrors.city = 'City is required';
      if (!personalInfo.state) newErrors.state = 'State is required';
      if (!personalInfo.pincode) newErrors.pincode = 'Pincode is required';
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (personalInfo.email && !emailRegex.test(personalInfo.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      
      // Phone validation
      const phoneRegex = /^[6-9]\d{9}$/;
      if (personalInfo.phone && !phoneRegex.test(personalInfo.phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }
    
    if (step === 3) {
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';
      if (!formData.terms) newErrors.terms = 'Please accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      console.log('Form Data:', formData);
      // Here you would integrate with Razorpay
      alert('Donation form submitted! Redirecting to payment...');
    }
  };

  const updateFormData = (path, value) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const getSelectedCause = () => causes.find(c => c.id === formData.cause);
  const getFinalAmount = () => formData.customAmount || formData.amount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section 
        id="hero"
        data-animate
        className={`relative py-16 px-4 overflow-hidden transition-all duration-1000 ${
          isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/5 to-blue-600/10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight">
            Make a Difference Today
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Your generous contribution helps us create lasting positive impact in communities across various social causes.
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step ? <Check className="w-5 h-5" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                    currentStep > step ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-500 space-x-8">
            <span className={currentStep === 1 ? 'text-blue-600 font-semibold' : ''}>Choose Cause & Amount</span>
            <span className={currentStep === 2 ? 'text-blue-600 font-semibold' : ''}>Personal Details</span>
            <span className={currentStep === 3 ? 'text-blue-600 font-semibold' : ''}>Payment & Review</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            
            {/* Step 1: Cause and Amount Selection */}
            {currentStep === 1 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Cause & Amount</h2>
                
                {/* Cause Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Choose a Cause</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {causes.map((cause) => {
                      const Icon = cause.icon;
                      return (
                        <button
                          key={cause.id}
                          onClick={() => updateFormData('cause', cause.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                            formData.cause === cause.id
                              ? 'border-blue-500 bg-blue-50 shadow-lg'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${cause.color} rounded-lg flex items-center justify-center mb-3`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{cause.name}</h3>
                          <p className="text-xs text-gray-500">{cause.impact}</p>
                        </button>
                      );
                    })}
                  </div>
                  {errors.cause && <p className="text-red-500 text-sm mt-2">{errors.cause}</p>}
                </div>

                {/* Donation Frequency */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Donation Frequency</label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => updateFormData('frequency', 'one-time')}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.frequency === 'one-time'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <Gift className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900">One-time</h3>
                        <p className="text-sm text-gray-500">Single donation</p>
                      </div>
                    </button>
                    <button
                      onClick={() => updateFormData('frequency', 'monthly')}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.frequency === 'monthly'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900">Monthly</h3>
                        <p className="text-sm text-gray-500">Recurring donation</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Select Amount {formData.frequency === 'monthly' && '(per month)'}
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          updateFormData('amount', amount);
                          updateFormData('customAmount', '');
                        }}
                        className={`p-3 rounded-xl border-2 font-semibold transition-all duration-300 ${
                          formData.amount === amount
                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                            : 'border-gray-200 hover:border-blue-300 text-gray-700'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={formData.customAmount}
                      onChange={(e) => {
                        updateFormData('customAmount', e.target.value);
                        updateFormData('amount', '');
                      }}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                    />
                    <span className="absolute left-4 top-3 text-gray-500">₹</span>
                  </div>
                  {errors.amount && <p className="text-red-500 text-sm mt-2">{errors.amount}</p>}
                  {errors.customAmount && <p className="text-red-500 text-sm mt-2">{errors.customAmount}</p>}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  <button
                    onClick={handlePrevious}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.personalInfo.firstName}
                        onChange={(e) => updateFormData('personalInfo.firstName', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="Enter first name"
                      />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.personalInfo.lastName}
                        onChange={(e) => updateFormData('personalInfo.lastName', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="Enter last name"
                      />
                    </div>
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.personalInfo.email}
                        onChange={(e) => updateFormData('personalInfo.email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="Enter email address"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.personalInfo.phone}
                        onChange={(e) => updateFormData('personalInfo.phone', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="Enter 10-digit phone number"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={formData.personalInfo.dateOfBirth}
                        onChange={(e) => updateFormData('personalInfo.dateOfBirth', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* PAN Card */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PAN Card (for tax benefits)
                    </label>
                    <input
                      type="text"
                      value={formData.panCard}
                      onChange={(e) => updateFormData('panCard', e.target.value.toUpperCase())}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                      placeholder="Enter PAN number"
                      maxLength={10}
                    />
                  </div>
                </div>

                {/* Address Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          value={formData.personalInfo.address}
                          onChange={(e) => updateFormData('personalInfo.address', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                          placeholder="Enter full address"
                          rows={3}
                        />
                      </div>
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          value={formData.personalInfo.city}
                          onChange={(e) => updateFormData('personalInfo.city', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                          placeholder="Enter city"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          value={formData.personalInfo.state}
                          onChange={(e) => updateFormData('personalInfo.state', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                          placeholder="Enter state"
                        />
                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          value={formData.personalInfo.pincode}
                          onChange={(e) => updateFormData('personalInfo.pincode', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                          placeholder="Enter pincode"
                          maxLength={6}
                        />
                        {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 3: Payment Method & Review */}
            {currentStep === 3 && (
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Review & Payment</h2>
                  <button
                    onClick={handlePrevious}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                </div>

                {/* Donation Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cause:</span>
                      <span className="font-semibold">{getSelectedCause()?.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-semibold text-xl text-blue-600">₹{getFinalAmount()?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-semibold capitalize">{formData.frequency}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Donor:</span>
                      <span className="font-semibold">{formData.personalInfo.firstName} {formData.personalInfo.lastName}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Select Payment Method</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.id}
                          onClick={() => updateFormData('paymentMethod', method.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                            formData.paymentMethod === method.id
                              ? 'border-blue-500 bg-blue-50 shadow-lg'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <Icon className="w-8 h-8 text-blue-600 mb-3" />
                          <h3 className="font-semibold text-gray-900 mb-1">{method.name}</h3>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </button>
                      );
                    })}
                  </div>
                  {errors.paymentMethod && <p className="text-red-500 text-sm mt-2">{errors.paymentMethod}</p>}
                </div>

                {/* Tax Benefit Info */}
                {formData.panCard && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-800">Tax Benefit Eligible</h4>
                    </div>
                    <p className="text-sm text-green-700 mt-1">
                      You are eligible for tax deduction under Section 80G of the Income Tax Act, 1961.
                    </p>
                  </div>
                )}

                {/* Terms and Conditions */}
                <div className="mb-8">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.terms}
                      onChange={(e) => updateFormData('terms', e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>{' '}
                      and{' '}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                      I understand that my donation will be used for the selected cause and EYA Foundation's mission.
                    </span>
                  </label>
                  {errors.terms && <p className="text-red-500 text-sm mt-2">{errors.terms}</p>}
                </div>

                {/* Final Donation Button */}
                <div className="space-y-4">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5" />
                    <span>
                      Donate ₹{getFinalAmount()?.toLocaleString()} 
                      {formData.frequency === 'monthly' ? '/month' : ' now'}
                    </span>
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Your donation is secure and encrypted. You will receive a receipt via email.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Donate with Us?</h3>
              <p className="text-gray-600">Your trust and transparency are our top priorities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">100% Secure</h4>
                <p className="text-sm text-gray-600">SSL encrypted and PCI compliant payments</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Tax Benefits</h4>
                <p className="text-sm text-gray-600">80G certified for tax deductions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Direct Impact</h4>
                <p className="text-sm text-gray-600">100% of donation goes to the cause</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;